<?php

namespace App\Controller;

use App\Entity\CarType;
use App\Entity\Car;
use App\Form\CarTypeFormType;
use App\Form\CarFormType;
use App\Repository\RentRepository;
use App\Repository\CarTypeRepository;
use App\Repository\UserRepository;
use App\Repository\CarRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * Panel permettant une gestion complète de ses véhicules, locations, clients et factures pour un renter
 *
 * @Route("/gestion", name="renter")
 */
class RenterController extends AbstractController
{
    /**
     * Page d'accueil avec récapitulatif rapide
     *
     * @Route("/", name="_panel")
     * @param RentRepository $rentRepository
     * @param UserRepository $userRepository
     * @return Response
     */
    public function dashboard(RentRepository $rentRepository, UserRepository $userRepository, UserInterface $user)
    {
        $rents = $rentRepository->findRenter($user);
        $nbCustomers = count($userRepository->findByRentalsOfRenter($user));

        return $this->render('renter/index.html.twig', [
            'rentals' => $rents,
            'nbCustomers' => $nbCustomers
        ]);
    }

    /**
     * Gestion de tout les véhicules du renter
     *
     * @Route("/vehicule", name="_cars")
     * @param CarRepository $carRepository
     * @param UserInterface $user
     * @return Response
     */
    public function cars(CarRepository $carRepository, UserInterface $user)
    {
        $cars = $carRepository->findOwnedBy($user);
        return $this->render('renter/cars.html.twig', [
            "Cars" => $cars
        ]);
    }

    /**
     * Ajout d'un nouveau mode Type de véhicule
     *
     * @Route("/modele/ajouter", name="_addType")
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function addType(Request $request)
    {
        $type = new CarType();
        $form = $this->createForm(CarTypeFormType::class, $type);
        $form->get('name')->setData($request->request->get('default_name', null));

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($type);
            $em->flush();

            return $this->redirect($this->generateUrl('renter_addCar'));
        }

        return $this->render('renter/addCarType.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * Permet de modifier un Type de véhicule
     *
     * @Route("/modele/modifier/{id}", name="_editType")
     * @param $id
     * @param CarTypeRepository $carTypeRepository
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function editType($id, CarTypeRepository $carTypeRepository, Request $request)
    {
        $type = $carTypeRepository->find($id);
        $form = $this->createForm(CarTypeFormType::class, $type);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->flush();

            $this->addFlash('success', 'Type '.$type->getName().' modifié !');
            return $this->redirect($this->generateUrl('renter_cars'));
        }

        return $this->render('renter/editCarType.html.twig', [
            'form' => $form->createView()
        ]);
    }


    /**
     * Permet d'ajouter un nouveau véhicule
     *
     * @Route("/vehicule/ajouter", name="_addCar")
     * @param Request $request
     * @param UserInterface $user
     * @return RedirectResponse|Response
     */
    public function addCar(Request $request, UserInterface $user)
    {
        $car = new Car();
        $car->setRenter($user);
        $car->setIsArchived(false);

        $form = $this->createForm(CarFormType::class, $car);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $features = array('boite' => $form->get('boite')->getData(),
                'moteur' => $form->get('moteur')->getData(),
                'carburant' => $form->get('carburant')->getData());
            $car->setFeatures($features);

            $em = $this->getDoctrine()->getManager();
            $em->persist($car);
            $em->flush();

            $this->addFlash('success', 'Véhicule '.$car->getId().' ajouté !');
            return $this->redirect($this->generateUrl('renter_cars'));
        }

        return $this->render('renter/addCar.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * Permet de modifier un véhicule existant
     *
     * @Route ("/vehicule/modifier/{id}", name="_editCar")
     * @param $id
     * @param CarRepository $carRepository
     * @param Request $request
     * @return RedirectResponse|Response
     */
    public function editCar($id, CarRepository $carRepository, Request $request){
        $car = $carRepository->find($id);

        $form = $this->createForm(CarFormType::class, $car);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->flush();
            $this->addFlash('success', 'Véhicule '.$car->getId().' modifié !');
            return $this->redirect($this->generateUrl('renter_cars'));
        }

        return $this->render('renter/editCar.html.twig', [
            'form' => $form->createView(),
            'car' => $car
        ]);
    }

    /**
     * Archive (n'apparait plus dans le panel renter) un véhicule
     *
     * @Route ("/vehicule/archiver/{id}", name="_deleteCar")
     * @param $id
     * @param CarRepository $carRepository
     * @param UserInterface $user
     * @return RedirectResponse
     */
    public function deleteCar($id, CarRepository $carRepository, UserInterface $user){
        $car = $carRepository->findByIDAndCurrent($id, $user);
        $isRented = $carRepository->isRented($id);

        if($car != null and isset($isRented['isRented'])) {
            if(!$isRented['isRented']) {
                $car->setIsArchived(true);
                $em = $this->getDoctrine()->getManager();
                $em->flush();
                $this->addFlash('success', 'Véhicule '.$car->getId().' supprimé !');
            }
            else {
                $this->addFlash('danger', 'Impossible de supprimer un véhicule en cours de location');
            }
        }
        else {
            $this->addFlash('danger', 'Véhicule inaccessible ou inexistant');
        }
        return $this->redirect($this->generateUrl('renter_cars'));
    }

    /**
     * Affiche les utilisateurs ayant loué au moins une fois avec ce renter
     *
     * @Route ("/clients", name="_customers")
     * @param UserRepository $userRepository
     * @param UserInterface $user
     * @return Response
     */
    public function customers(UserRepository $userRepository, UserInterface $user){

        $customers = $userRepository->findByRentalsOfRenter($user);

        return $this->render('renter/customers.html.twig', [
            "customers" => $customers
        ]);

    }

    /**
     * Affiche la facturation du client pour le mois courant
     *
     * @Route ("/facturation/{id}", name="_billing")
     * @param RentRepository $rentRepository
     * @param UserRepository $userRepository
     * @param $id
     * @param UserInterface $user
     * @return Response
     */
    public function billing(RentRepository $rentRepository, UserRepository $userRepository, $id, UserInterface $user){
        $customer = $userRepository->find($id);
        $locations = $rentRepository->findOneWithBilling($customer, $user);

        return $this->render('renter/billing.html.twig', [
            "rentals" => $locations,
            "customer" => $customer
        ]);

    }

    /**
     * Affiche toutes les locations du renter
     *
     * @Route ("/locations", name="_rents")
     * @param RentRepository $rentRepository
     * @param UserInterface $user
     * @return Response
     */
    public function renterRents(RentRepository $rentRepository, UserInterface $user){
        $rents= $rentRepository->findRenter($user);

        return $this->render('renter/rents.html.twig', [
            "rentals" => $rents
        ]);

    }

    /**
     * @Route("/details/{id}", name="_rent_details")
     * @param $id
     * @param RentRepository $rentRepository
     * @param UserInterface $user
     * @return RedirectResponse|Response
     */
    public function rentDetail($id, RentRepository $rentRepository, UserInterface $user){
        $rent = $rentRepository->findOneOf($id, $user);

        if($rent != null) {
            return $this->render('renter/rent_details.html.twig', [
                'rent' => $rent
            ]);
        }
        else {
            $this->addFlash('danger','Erreur location inaccessible ou inexistante!');
            return $this->redirect($this->generateUrl('user_rents'));
        }
    }
}
