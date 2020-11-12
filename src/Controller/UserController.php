<?php

namespace App\Controller;

use App\Entity\Location;
use App\Repository\LocationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @Route("/compte", name="user")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/", name="_panel")
     */
    public function index(LocationRepository $locationRepository)
    {
        $locations = $locationRepository->findBy(['user' => $this->getUser()]);
        return $this->render('user/index.html.twig', [
            'locations' => $locations,
        ]);
    }

    /**
     * @Route("/locations", name="_panel_locations")
     */
    public function locations(LocationRepository $locationRepository)
    {
        $locations = $locationRepository->findBy(['user' => $this->getUser()]);
        return $this->render('user/locations.html.twig', [
            'locations' => $locations,
        ]);
    }

    /**
     * @Route("/facturation/{id}", name="_location_facturation")
     */
    public function facturation($id, LocationRepository $locationRepository, Request $request, UserInterface $user){
        $location = $locationRepository->findOneBy(['id' => $id, 'user' => $user]);

        if($location != null) {
            $location->setEstPayee(true);

            $em = $this->getDoctrine()->getManager();
            $em->flush();

            $this->addFlash('success', 'Paiement pour la location #'.$id.' effectué avec succès!');
            return $this->redirect($this->generateUrl('user_panel_locations'));
        }
        else {
            $this->addFlash('danger','Erreur facturation inaccessible ou inexistante!');
            return $this->redirect($this->generateUrl('user_panel_locations'));
        }
    }

    /**
     * @Route("/details/{id}", name="_location_recap")
     */
    public function recapLocation($id, LocationRepository $locationRepository, Request $request, UserInterface $user){
        $location = $locationRepository->findOneBy(['id' => $id, 'user' => $user]);
        if($location != null) {
            return $this->render('user/location_recap.html.twig', [
                'location' => $location
            ]);
        }
        else {
            $this->addFlash('danger','Erreur location inaccessible ou inexistante!');
            return $this->redirect($this->generateUrl('user_panel_locations'));
        }
    }
}
