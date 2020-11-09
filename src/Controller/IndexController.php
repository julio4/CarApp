<?php

namespace App\Controller;

use App\Entity\TypeVehicule;
use App\Entity\Vehicule;
use App\Repository\TypeVehiculeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateIntervalType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function index(TypeVehiculeRepository $typeVehiculeRepository)
    {
        $types = $typeVehiculeRepository->findAll();
//        $typesAvailable = array();
//        foreach($types as $type) {
//            $vehicules = $type->getVehicules();
//            foreach($vehicules as $vehicule) {
//                if ($vehicule->getEtat() == "Disponible") {
//                    array_push($typesAvailable, $type);
//                    break;
//                }
//            }
//        }

        return $this->render("index/index.html.twig", [
            'types' => $types
        ]);
    }

    /**
     * @Route("/type/{id}", name="type")
     */
    public function afficherType($id,Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $type = $em->getRepository(TypeVehicule::class)->find($id);

//        $select = array();
//        for ($i = 0; $i < $type->getVehicules()->count(); $i++) {
//            array_push($select, $i);
//        }

        $form = $this->createFormBuilder()
                ->add('date', null, [
                    'label' => "Dates de location:",
                    'attr' => ['class' => 'picker'],
                    'required' => false
                ])
                ->add('select', ChoiceType::class, [
                    'choices' => $type->getVehicules(),
                    'required' => false,
                    'expanded' => true,
                    'multiple' => true,
                    'choice_label' => function ($choice, $key, $value) {
                            return 'O';
                    }
//                    'choice_value' => 'id',
//                    'choice_label' => 'Acheter maintenant',
                    //'attr' => ['class' => 'btn btn-main btn-primary m-2 p-3']

                ])
                ->getForm();

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            $data = $form->getData();
            dump($data);
            $isReccurent = !isset($data['date']);
            $dates = $isReccurent ? null : preg_split('/( - )/', $data['date']);
            //TODO Ajouter date dans SESSION data
            //$vehicule;

        }

        return $this->render("index/vehicule.html.twig", [
            'type' => $type,
            'form' => $form->createView()
        ]);
    }

    private function frDateToEn($date_string) {
        return strtotime(strtr(strtolower($date_string), array('janvier'=>'jan','février'=>'feb','mars'=>'march','avril'=>'apr','mai'=>'may','juin'=>'jun','juillet'=>'jul','août'=>'aug','septembre'=>'sep','octobre'=>'oct','novembre'=>'nov','décembre'=>'dec'))); }
}
