<?php

namespace App\Controller;

use App\Entity\TypeVehicule;
use App\Repository\TypeVehiculeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function index(TypeVehiculeRepository $typeVehiculeRepository)
    {
        $types = $typeVehiculeRepository->findAll();
        $typesAvailable = array();
        foreach($types as $type) {
            $vehicules = $type->getVehicules();
            foreach($vehicules as $vehicule) {
                if ($vehicule->getEtat() == "Disponible") {
                    array_push($typesAvailable, $type);
                    break;
                }
            }
        }

        return $this->render("index/index.html.twig", [
            'types' => $typesAvailable
        ]);
    }

    /**
     * @Route("/type/{id}", name="type")
     */
    public function afficherType($id)
    {
        $em = $this->getDoctrine()->getManager();
        $type = $em->getRepository(TypeVehicule::class)->find($id);

        return $this->render("index/vehicule.html.twig", [
            'type' => $type,
        ]);
    }
}
