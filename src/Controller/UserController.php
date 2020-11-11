<?php

namespace App\Controller;

use App\Repository\LocationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

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
}
