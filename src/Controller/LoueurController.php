<?php

namespace App\Controller;

use App\Entity\TypeVehicule;
use App\Entity\Vehicule;
use App\Form\TypeVehiculeFormType;
use App\Form\VehiculeFormType;
use App\Repository\LocationRepository;
use App\Repository\UserRepository;
use App\Repository\VehiculeRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints\File;
use Vich\UploaderBundle\Form\Type\VichImageType;

/**
 * @Route("/loueur", name="loueur")
 */
class LoueurController extends AbstractController
{
    /**
     * @Route("/", name="_panel")
     */
    public function dashboard(LocationRepository $locationRepository, UserRepository $userRepository)
    {
        $locations = $locationRepository->findAll();
        $nbClients = $userRepository->countClient();
        dump($nbClients);
        return $this->render('loueur/index.html.twig', [
            'locations' => $locations,
            'nbClients' => $nbClients
        ]);
    }

    /**
     * @Route("/vehicules", name="_vehicules")
     */
    public function vehicules(VehiculeRepository $vehiculeRepository, UserInterface $user)
    {
        $vehicules = $vehiculeRepository->findOwnedBy($user);
        return $this->render('loueur/vehicules.html.twig', [
            "vehicules" => $vehicules
        ]);
    }

    /**
     * @Route("/modele/ajouter", name="_type_ajouter")
     */
    public function ajoutType(Request $request)
    {
        $type = new TypeVehicule();
        $form = $this->createForm(TypeVehiculeFormType::class, $type);
        $form->get('name')->setData($request->request->get('default_name', null));

        //TODO Dynamic form validation http://growingcookies.com/en/dynamic-form-validation-in-symfony-using-ajax/
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
//            $data = $form->getData();
            dump($type);

            $em = $this->getDoctrine()->getManager();
            $em->persist($type);
            $em->flush();

            return $this->redirect($this->generateUrl('loueur_vehicules_ajouter'));
        }

        return $this->render('loueur/type_formulaire.html.twig', [
            'form' => $form->createView()
        ]);
    }


    /**
     * @Route("/vehicules/ajouter", name="_vehicules_ajouter")
     */
    public function ajoutVehicules(Request $request, UserInterface $user)
    {
        $vehicule = new Vehicule();
        $form = $this->createForm(VehiculeFormType::class, $vehicule);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $carac = array('boite' => $form->get('boite')->getData(),
                'moteur' => $form->get('moteur')->getData(),
                'carburant' => $form->get('carburant')->getData());
            $vehicule->setCarac($carac);
            $vehicule->setLoueur($user);

            $em = $this->getDoctrine()->getManager();
            $em->persist($vehicule);
            $em->flush();

            return $this->redirect($this->generateUrl('loueur_vehicules'));
        }

        return $this->render('loueur/vehicules_formulaire.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route ("/vehicules/modifier/{id}", name="_vehicules_modifier")
     */
    public function modifVehicules($id, VehiculeRepository $vehiculeRepository,Request $request){
        $vehicule = $vehiculeRepository->find($id);

        $form = $this->createForm(VehiculeFormType::class, $vehicule);
        dump($form->createView());

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->flush();
            return $this->redirect($this->generateUrl('loueur_vehicules'));
        }

        return $this->render('loueur/vehicules_modifier.html.twig', [
            'form' => $form->createView(),
            'vehicule' => $vehicule
        ]);
    }

    /**
     * @Route ("/clients", name="_clients")
     */
    public function afficherClients(UserRepository $userRepository, UserInterface $user){

        $clients = $userRepository->findByLocationOfLoueur($user);

        return $this->render('loueur/clients.html.twig', [
            "clients" => $clients
        ]);

    }

    /**
     * @Route ("/facturation/{id}", name="_facturation")
     */
    public function facturation(UserRepository $userRepository, $id){
        $client = $userRepository->find($id);
        return $this->render('loueur/facturation.html.twig', [
            "id" => $id
        ]);

    }

    /**
     * @Route ("/locations", name="_locations")
     */
    public function afficherlocations(LocationRepository $locationRepository, UserInterface $user){

        $locations = $locationRepository->findLoueur($user);

        return $this->render('loueur/locations.html.twig', [
            "locations" => $locations
        ]);

    }

    /**
     * @Route ("/statistiques", name="_statistiques")
     */
    public function afficherStats(VehiculeRepository $vehiculeRepository, UserInterface $user){

        $vehicules = $vehiculeRepository->findOwnedBy($user);
        return $this->render('loueur/statistiques.html.twig', [
            "vehicules" => $vehicules
        ]);

    }
}
