<?php

namespace App\Controller;

use App\Entity\Location;
use App\Entity\Vehicule;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/location", name="location")
 */
class LocationController extends AbstractController
{
    /**
     * @Route("/vehicule/{id}", methods={"POST"}, name="_louer")
     */
    public function louer($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $vehicule = $em->getRepository(Vehicule::class)->find($id);

        $post_date = $request->request->get('date', '');
        $dates = preg_split('/( - )/', $post_date);
        if(sizeof($dates) == 2) {
            $isReccurent = false;
            $this->get('session')->set('dateDebut', $dates[0]);
            $this->get('session')->set('dateFin', $dates[1]);
        }
        else {
            $isReccurent = true;
        }
        //TODO VERIFIER DATE VALIDE --> ( en cas de manipulation des données de la page )
        if($this->isGranted("ROLE_USER")) {

            $location = new Location();
            $location->setVehicule($vehicule);
            $location->setUser($this->getUser());

            if($isReccurent) {
                $location->setEstReccurent(true);
                $location->setPrix($vehicule->getPrix() * 0.9); //PROMOTION 10%
            }
            else {
                $dateDeb = $this->frDateToEn($dates[0]);
                $dateFin = $this->frDateToEn($dates[1]);
                $location->setDateDebut($dateDeb);
                $location->setDateFin($dateFin);
                $location->setEstReccurent(false);

                $datediff = $dateFin->diff($dateDeb)->format("%a");
                if(round($datediff / (60 * 60 * 24)) > 30) {
                    $location->setPrix($vehicule->getPrix() * 0.9);
                }
                else {
                    $location->setPrix($vehicule->getPrix());
                }

                $location->setPrix($vehicule->getPrix() * 0.9); //PROMOTION 10%
            }

            $em = $this->getDoctrine()->getManager();
            $em->persist($location);
            $em->flush();
            $this->addFlash('success','Nouvelle réservation <a href="'. "TODO lien vers facture/location" .'">#'. $location->getId() . '</a> validée');
        }
        else {
            $this->addFlash('danger','Veuiller vous <a href="'.$this->generateUrl("app_connexion").'">connecter</a> avec un compte utilisateur pour pouvoir louer des véhicules');
        }
        return $this->redirect($this->generateUrl('index_type', ["id" => $vehicule->getType()->getId()]));
    }

    private function frDateToEn($date_string) {
        return new \Datetime(strtr(strtolower($date_string), array('janvier'=>'jan','février'=>'feb','mars'=>'march','avril'=>'apr','mai'=>'may','juin'=>'jun','juillet'=>'jul','août'=>'aug','septembre'=>'sep','octobre'=>'oct','novembre'=>'nov','décembre'=>'dec')));
    }
}
