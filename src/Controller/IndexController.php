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
                    'label' => "Dates de location:",
                    'attr' => ['class' => 'picker'],
                    'required' => false,
                ])
            ->getForm();

        if($this->isValidCookieDate()) {
            $types = $typeVehiculeRepository->findAllAvailableBetween(
                $this->frDateToEn($this->get('session')->get('dateDebut')),
                $this->frDateToEn($this->get('session')->get('dateFin'))
            );
        }
        else {
            $types = $typeVehiculeRepository->findAllAvailable();
        }

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            $data = $form->getData();

            $dates = preg_split('/( - )/', $data['date']);
            if(sizeof($dates) == 2) {
                $isReccurent = false;
                $this->get('session')->set('dateDebut', $dates[0]);
                $this->get('session')->set('dateFin', $dates[1]);
            }

            //TODO VERIFIER DATE VALIDE --> ( en cas de manipulation des données de la page )
            //TODO ici on trie les résultat des véhicules et on change $vehicules
            $types = $typeVehiculeRepository->findAllAvailableBetween($this->frDateToEn($dates[0]), $this->frDateToEn($dates[1]));
        }
        dump($types);
        return $this->render("index/index.html.twig", [
            'types' => $types,
            'savedDates' => [
                "Debut" => $this->get('session')->get('dateDebut'),
                "Fin" => $this->get('session')->get('dateFin')
            ],
            'form' => $form->createView()
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
        if($this->isValidCookieDate()) {
            $savedDates = [
                "Debut" => $this->get('session')->get('dateDebut'),
                "Fin" => $this->get('session')->get('dateFin')];
            $vehicules = $vehiculesRepo->findAllAvailableByTypeBetween( $type,
                $this->frDateToEn($savedDates["Debut"]),
                $this->frDateToEn($savedDates["Fin"])
            );
        }
        else {
            $vehicules = $vehiculesRepo->findAllAvailableByType($type);
        }

        if(count($vehicules) > 0) {
            $form = $this->createFormBuilder()
                ->getForm();

            $form->handleRequest($request);
            if ($form->isSubmitted() && $form->isValid()) {

                $data = $form->getData();

                //TODO ici on trie les résultat des véhicules et on change $vehicules

            }
            $days = $this->countDays();
            dump($days);
            return $this->render("index/vehicule.html.twig", [
                'type' => $type,
                'vehicules' => $vehicules,
                'savedDates' => [
                    "Debut" => $this->get('session')->get('dateDebut'),
                    "Fin" => $this->get('session')->get('dateFin'),
                ],
                'days' => $days,
                'form' => $form->createView()
            ]);
        }
        //TODO ajouter un flash d'erreur ?
        return $this->redirect($this->generateUrl('index_home'));
    }

    /**
     * @Route("/date_r", name="_date_reset")
     */
    public function reinit_dates()
    {
        $this->get('session')->remove('dateDebut');
        $this->get('session')->remove('dateFin');
        return $this->redirect($this->generateUrl('index_home'));
    }

    private function isValidCookieDate() {
        if($this->get('session')->has('dateDebut') and $this->get('session')->has('dateFin')) {
            if($this->frDateToEn($this->get('session')->get('dateDebut'))
                < $this->frDateToEn($this->get('session')->get('dateFin')))
                if($this->frDateToEn($this->get('session')->get('dateDebut') >= date('Y-m-d', time())))
                    return true;
        }
        return false;
    }

    private function countDays() {
        if($this->isValidCookieDate()) {
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
