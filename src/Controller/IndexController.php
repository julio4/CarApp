<?php

namespace App\Controller;

use App\Entity\TypeVehicule;
use App\Entity\Vehicule;
use App\Repository\TypeVehiculeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/", name="index")
 */
class IndexController extends AbstractController
{
    /**
     * @Route("/", name="_home")
     */
    public function index(TypeVehiculeRepository $typeVehiculeRepository, Request $request)
    {
        $form = $this->createFormBuilder()
                ->add('date', null, [
                    'label' => "Saisissez vos dates de location",
                    'attr' => ['class' => 'picker'],
                    'required' => false,
                ])
            ->getForm();

        //On récupère le cookie pour les dates
        if(!$this->get('session')->has('récurrent'))
            $this->get('session')->set('récurrent', true);
        $estRecurrent = $this->get('session')->get('récurrent') ? true : false;

        //Recherche des types disponibles avec les dates fournis
        if(!$estRecurrent) {
            if($this->isValidCookieDates()) {
                $types = $typeVehiculeRepository->findAllAvailableBetween(
                    $this->frDateToEn($this->get('session')->get('dateDebut')),
                    $this->frDateToEn($this->get('session')->get('dateFin'))
                );
            }
            else
                $types = $typeVehiculeRepository->findAllAvailable(date_create('now'));
        }
        else {
            $this->get('session')->set('récurrent', true);
            if($this->isValidDate($this->get('session')->get('dateDebut')))
                $types = $typeVehiculeRepository
                    ->findAllAvailable($this->frDateToEn($this->get('session')->get('dateDebut')));
            else
                $types = $typeVehiculeRepository->findAllAvailable(date_create('now'));
        }

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            if($estRecurrent) {
                //Mise à jour du cookie récurrent
                $this->get('session')->set('récurrent', true);

                //Récupération de la date
                $date = $data['date'];
                if($this->isValidDate($date)){
                    $this->get('session')->set('dateDebut', $date);
                    $types = $typeVehiculeRepository->findAllAvailable($this->frDateToEn($date));
                }
                //date invalide, on retourne une erreur
                else {
                    $this->addFlash('danger', 'Veuillez fournir une date au format \'jour mois année\'');
                    return $this->redirect($this->generateUrl('index_home'));
                }
            }
            else {
                //Mise à jour du cookie récurrent
                $this->get('session')->set('récurrent', false);

                //on récupère les deux dates
                $dates = preg_split('/( - )/', $data['date']);
                if(sizeof($dates) == 2 and $this->isValidDates($dates[0], $dates[1])) {
                    //On met à jour les cookies
                    $this->get('session')->set('dateDebut', $dates[0]);
                    $this->get('session')->set('dateFin', $dates[1]);

                    //On charge les types disponible avec les dates fournies
                    $types = $typeVehiculeRepository->findAllAvailableBetween($this->frDateToEn($dates[0]), $this->frDateToEn($dates[1]));
                }
                //dates invalide, on retourne une erreur
                else {
                    $this->addFlash('danger', 'Veuillez fournir une date au format \'jour mois année - jour mois année\'');
                    return $this->redirect($this->generateUrl('index_home'));
                }
            }
        }

        $estRecurrent ? $this->addMessageRecurrent() : $this->addMessageDates();

        dump($types);
        return $this->render("index/index.html.twig", [
            'types' => $types,
            'savedDates' => [
                "Debut" => $this->get('session')->get('dateDebut'),
                "Fin" => $this->get('session')->get('dateFin')
            ],
            'form' => $form->createView(),
            'estRecurrent' => $estRecurrent
        ]);
    }

    /**
     * @Route("/type/{id}", name="_type")
     */
    public function afficherType($id,Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $type = $em->getRepository(TypeVehicule::class)->find($id);

        $vehiculesRepo = $em->getRepository(Vehicule::class);
        $estRecurrent = $this->get('session')->get('récurrent');

        if($estRecurrent) {
            if($this->isValidDate($this->get('session')->get('dateDebut'))) {
                $vehicules = $vehiculesRepo->findAllAvailableByTypeAt($this->frDateToEn($this->get('session')->get('dateDebut')),$type);
            }
            else {
                $this->addFlash('danger','Veuillez préciser une date de début');
                return $this->redirect($this->generateUrl('index_home'));
            }
        }
        elseif($this->isValidCookieDates()) {
                $savedDates = [
                    "Debut" => $this->get('session')->get('dateDebut'),
                    "Fin" => $this->get('session')->get('dateFin')];
                $vehicules = $vehiculesRepo->findAllAvailableByTypeBetween( $type,
                    $this->frDateToEn($savedDates["Debut"]),
                    $this->frDateToEn($savedDates["Fin"])
                );
            }
        else {
            $this->addFlash('danger','Veuillez préciser une intervalle de date pour la location');
            return $this->redirect($this->generateUrl('index_home'));
        }

        $days = $this->countDays();

        return $this->render("index/vehicule.html.twig", [
            'type' => $type,
            'vehicules' => $vehicules,
            'savedDates' => [
                "Debut" => $this->get('session')->get('dateDebut'),
                "Fin" => $this->get('session')->get('dateFin'),
            ],
            'days' => $days,
            'estReccurent' => $estRecurrent
        ]);
    }

    /**
     * @Route("/date_r", name="_date_reset")
     */
    public function reinit_dates()
    {
        $this->get('session')->remove('dateDebut');
        $this->get('session')->remove('dateFin');
        $this->get('session')->set('récurrent', true);
        return $this->redirect($this->generateUrl('index_home'));
    }

    /**
     * @Route("/date_i", name="_date_init")
     */
    public function init_dates()
    {
        $this->get('session')->set('récurrent', false);
        return $this->redirect($this->generateUrl('index_home'));
    }

    private function addMessageRecurrent() {
        $this->addFlash('info', 'Vous consultez les véhicules disponibles pour une location mensuelle à durée indéterminée !');
    }

    private function addMessageDates() {
        $this->addFlash('warning', 'Vous consultez les véhicules disponibles pour une location fixe !');
    }

    private function isValidDates($dateDeb, $dateFin) {
        if($this->frDateToEn($dateDeb) < $this->frDateToEn($dateFin))
            if($this->frDateToEn($dateDeb) >= date('Y-m-d', time()))
                return true;
        return false;
    }

    private function isValidDate($date) {
        if($this->frDateToEn($date) >= date('Y-m-d', time()))
            return true;
        return false;
    }

    private function isValidCookieDates() {
        if ($this->get('session')->has('récurrent') and !$this->get('session')->get('récurrent'))
            if($this->get('session')->has('dateDebut') and $this->get('session')->has('dateFin')) {
                return $this->isValidDates($this->get('session')->get('dateDebut'), $this->get('session')->get('dateFin'));
            }
        return false;
    }

    private function countDays() {
        if($this->isValidCookieDates()) {
            $dateDeb = $this->frDateToEn($this->get('session')->get('dateDebut'));
            $dateFin = $this->frDateToEn($this->get('session')->get('dateFin'));

            return $dateFin->diff($dateDeb)->format("%a") + 1;
        }
        return null;
    }

    private function frDateToEn($date_string) {
        return date_create(strtr(mb_strtolower($date_string), array('janvier'=>'jan','février'=>'feb','mars'=>'march','avril'=>'apr','mai'=>'may','juin'=>'jun','juillet'=>'jul','août'=>'aug','septembre'=>'sep','octobre'=>'oct','novembre'=>'nov','décembre'=>'dec')));
    }

}
