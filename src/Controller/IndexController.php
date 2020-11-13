<?php

namespace App\Controller;

use App\Entity\Car;
use App\Repository\CarRepository;
use App\Repository\CarTypeRepository;
use DateTime;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Les pages du site accessible par tous, pour parcourir les véhicules disponibles à la location
 *
 * @Route("/", name="index")
 */
class IndexController extends AbstractController
{
    /**
     * autoredirect
     * @Route("/", name="_home_redirect")
     */
    public function home_redirect(CarTypeRepository $carTypeRepository, Request $request)
    {
        return $this->redirect($this->generateUrl('index_home',['page' => 1]));
    }

    /**
     * La page d'accueil du site
     *
     * @Route("/page/{page}", defaults={"page"=1}, name="_home")
     * @param CarTypeRepository $carTypeRepository
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function index(CarTypeRepository $carTypeRepository, Request $request,$page)
    {
        $form = $this->createFormBuilder()
                ->add('date', null, [
                    'label' => "Saisissez vos dates de location",
                    'attr' => ['class' => 'picker'],
                    'required' => false,
                ])
            ->getForm();

        //On récupère le cookie pour les dates
        if(!$this->get('session')->has('recurring'))
            $this->get('session')->set('recurring', true);
        $isMonthlyRecurring = $this->get('session')->get('recurring') ? true : false;

        //Recherche des types disponibles avec les dates fournis
        if(!$isMonthlyRecurring) {
            if($this->isValidCookieDates()) {
                $types = $carTypeRepository->findAllAvailableBetween(
                    $this->frDateToEn($this->get('session')->get('startDate')),
                    $this->frDateToEn($this->get('session')->get('endDate'))
                );
            }
            else
                $types = $carTypeRepository->findAllAvailable(date_create('now'));
        }
        else {
            $this->get('session')->set('recurring', true);
            if($this->isValidDate($this->get('session')->get('startDate')))
                $types = $carTypeRepository
                    ->findAllAvailable($this->frDateToEn($this->get('session')->get('startDate')));
            else
                $types = $carTypeRepository->findAllAvailable(date_create('now'));
        }

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            if($isMonthlyRecurring) {
                //Mise à jour du cookie récurrent
                $this->get('session')->set('recurring', true);

                //Récupération de la date
                $date = $data['date'];
                if($this->isValidDate($date)){
                    $this->get('session')->set('startDate', $date);
                    $types = $carTypeRepository->findAllAvailable($this->frDateToEn($date));
                }
                //date invalide, on retourne une erreur
                else {
                    $this->addFlash('danger', 'Veuillez fournir une date au format \'jour mois année\'');
                    return $this->redirect($this->generateUrl('index_home'));
                }
            }
            else {
                //Mise à jour du cookie récurrent
                $this->get('session')->set('recurring', false);

                //on récupère les deux dates
                $dates = preg_split('/( - )/', $data['date']);
                if(sizeof($dates) == 2 and $this->isValidDates($dates[0], $dates[1])) {
                    //On met à jour les cookies
                    $this->get('session')->set('startDate', $dates[0]);
                    $this->get('session')->set('endDate', $dates[1]);

                    //On charge les types available avec les dates fournies
                    $types = $carTypeRepository->findAllAvailableBetween($this->frDateToEn($dates[0]), $this->frDateToEn($dates[1]));
                }
                //dates invalide, on retourne une erreur
                else {
                    $this->addFlash('danger', 'Veuillez fournir une date au format \'jour mois année - jour mois année\'');
                    return $this->redirect($this->generateUrl('index_home'));
                }
            }
        }

        $isMonthlyRecurring ? $this->addMonthlyRecurringTips() : $this->addFixedDatesTips();
        $nbPages = ceil(count($types) / 8);

        return $this->render("index/index.html.twig", [
            'types' => $types,
            'savedDates' => [
                "Start" => $this->get('session')->get('startDate'),
                "End" => $this->get('session')->get('endDate')
            ],
            'form' => $form->createView(),
            'isMonthlyRecurring' => $isMonthlyRecurring,
            'page' => $page,
            'nbPages' => $nbPages
        ]);
    }

    /**
     * Affiche les véhicule du type donnée avec les informations de location précisé dans la page d'accueil
     *
     * @Route("/type/{id}", name="_type")
     * @param $id
     * @param CarTypeRepository $carTypeRepository
     * @param CarRepository $carRepository
     * @return RedirectResponse|Response
     */
    public function showCarsOfType($id, CarTypeRepository $carTypeRepository, CarRepository $carRepository)
    {
        $type = $carTypeRepository->find($id);
        $isMonthlyRecurring = $this->get('session')->get('recurring');

        if($isMonthlyRecurring) {
            if($this->isValidDate($this->get('session')->get('startDate'))) {
                $cars = $carRepository
                    ->findAllAvailableByTypeAt($this->frDateToEn($this->get('session')->get('startDate')),$type);
            }
            else {
                $this->addFlash('danger','Veuillez préciser une date de début');
                return $this->redirect($this->generateUrl('index_home'));
            }
        }
        elseif($this->isValidCookieDates()) {
                $savedDates = [
                    "Start" => $this->get('session')->get('startDate'),
                    "End" => $this->get('session')->get('endDate')];

                $temp = $carRepository->findAllAvailableByTypeBetween($type);
                $cars = array();
                for($i = 1; $i < count($temp); $i++){
                    if(count($temp[$i]->getRentals()) == 0)
                        $cars[] = $temp[$i];
                    else {
                        $isValid = true;
                        foreach ($temp[$i]->getRentals() as $rental) {
                            if($rental->getIsMonthlyRecurring() AND !$rental->getFinished()) {
                                if($rental->getStartDate() >= $this->frDateToEn($savedDates["Start"]))
                                    $isValid = false;
                            }
                            elseif($rental->getEndDate() >= $this->frDateToEn($savedDates["Start"])) {
                                $isValid = false;
                            }
                        }
                        if($isValid)
                            $cars[] = $temp[$i];
                    }
                }
            }
        else {
            $this->addFlash('danger','Veuillez préciser une intervalle de date pour la location');
            return $this->redirect($this->generateUrl('index_home'));
        }

        $days = $this->countDays();

        return $this->render("index/car.html.twig", [
            'type' => $type,
            'Cars' => $cars,
            'savedDates' => [
                "Start" => $this->get('session')->get('startDate'),
                "End" => $this->get('session')->get('endDate'),
            ],
            'days' => $days,
            'isMonthlyRecurring' => $isMonthlyRecurring
        ]);
    }

    /**
     * Réinitialise les dates et passe en mode mensuel
     *
     * @Route("/date_r", name="_date_reset")
     */
    public function reinit_dates()
    {
        $this->get('session')->remove('startDate');
        $this->get('session')->remove('endDate');
        $this->get('session')->set('recurring', true);
        return $this->redirect($this->generateUrl('index_home'));
    }

    /**
     * Initialise les dates pour une location à des dates fixées
     *
     * @Route("/date_i", name="_date_init")
     */
    public function init_dates()
    {
        $this->get('session')->set('recurring', false);
        return $this->redirect($this->generateUrl('index_home'));
    }

    /**
     * Affiche un message d'info pour préciser l'utilisateur qu'il est en mode Mensuel
     */
    private function addMonthlyRecurringTips() {
        $this->addFlash('info', 'Vous consultez les véhicules disponibles pour une location mensuelle à durée indéterminée !');
    }

    /**
     * Affiche un message d'info pour préciser l'utilisateur qu'il est en mode dates fixées
     */
    private function addFixedDatesTips() {
        $this->addFlash('warning', 'Vous consultez les véhicules disponibles pour une location fixe !');
    }

    /**
     * Valide l'intervalle de date
     * @param $startDate
     * @param $endDate
     * @return bool
     */
    private function isValidDates($startDate, $endDate) {
        if($this->frDateToEn($startDate) < $this->frDateToEn($endDate))
            if($this->frDateToEn($startDate) >= date('Y-m-d', time()))
                return true;
        return false;
    }

    /**
     * Valide une date
     * @param $date
     * @return bool
     */
    private function isValidDate($date) {
        if($this->frDateToEn($date) >= date('Y-m-d', time()))
            return true;
        return false;
    }

    /**
     * Vérifie que les dates contenues dans les cookies ne sont pas erronées
     * (si cookies anciens ou modifications tierces)
     */
    private function isValidCookieDates() {
        if ($this->get('session')->has('recurring') and !$this->get('session')->get('recurring'))
            if($this->get('session')->has('startDate') and $this->get('session')->has('endDate')) {
                return $this->isValidDates($this->get('session')->get('startDate'), $this->get('session')->get('endDate'));
            }
        return false;
    }

    /**
     * Compte le nombre de jours de l'intervalle de dates des cookies
     */
    private function countDays() {
        if($this->isValidCookieDates()) {
            $startDate = $this->frDateToEn($this->get('session')->get('startDate'));
            $endDate = $this->frDateToEn($this->get('session')->get('endDate'));

            return $endDate->diff($startDate)->format("%a") + 1;
        }
        return null;
    }

    /**
     * Convertis une date au format Français à un format Date
     * @param $date_string
     * @return DateTime|false
     */
    private function frDateToEn($date_string) {
        return date_create(strtr(mb_strtolower($date_string), array('janvier'=>'jan','février'=>'feb','mars'=>'march','avril'=>'apr','mai'=>'may','juin'=>'jun','juillet'=>'jul','août'=>'aug','septembre'=>'sep','octobre'=>'oct','novembre'=>'nov','décembre'=>'dec')));
    }

}
