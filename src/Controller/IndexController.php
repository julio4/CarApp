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

        if($this->get('session')->has('dateDebut') and $this->get('session')->has('dateFin')) {
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
        //TODO récupéré uniquement les véhicule loué ... Querrybuilder depuis Vehicule en prenant en paramètre l'id type
        $type = $em->getRepository(TypeVehicule::class)->find($id);
        $vehicules =  $em->getRepository(Vehicule::class)->findTypeAvailable($type);

        $form = $this->createFormBuilder()
//                ->add('date', null, [
//                    'label' => "Choisissez vos dates de location",
//                    'attr' => ['class' => 'picker'],
//                    'required' => false,
//                ])
                ->getForm();

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            $data = $form->getData();

            //TODO ici on trie les résultat des véhicules et on change $vehicules

        }

        return $this->render("index/vehicule.html.twig", [
            'type' => $type,
            'vehicules' => $vehicules,
            'savedDates' => [
                "Debut" => $this->get('session')->get('dateDebut'),
                "Fin" => $this->get('session')->get('dateFin')
            ],
            'form' => $form->createView()
        ]);
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

    private function frDateToEn($date_string) {
        return new \Datetime(strtr(strtolower($date_string), array('janvier'=>'jan','février'=>'feb','mars'=>'march','avril'=>'apr','mai'=>'may','juin'=>'jun','juillet'=>'jul','août'=>'aug','septembre'=>'sep','octobre'=>'oct','novembre'=>'nov','décembre'=>'dec')));
    }

}
