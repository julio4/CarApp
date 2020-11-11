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
    public function index()
    {
        return $this->render('user/index.html.twig', [
            'controller_name' => 'UserController',
        ]);
    }

    /**
     * @Route("/locations", name="_panel_locations")
     */
    public function locations(LocationRepository $locationRepository)
    {
        $locations = $locationRepository->findBy(['user' => $this->getUser()]);
        dump($locations);
        return $this->render('user/locations.html.twig', [
            'locations' => $locations,
        ]);
    }
}
