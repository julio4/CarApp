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
        if($this->isGranted("ROLE_USER") and $this->isValidDate($dates[0], $dates[1])) {

            $location = new Location();
            $location->setVehicule($vehicule);
            $location->setUser($this->getUser());

            $days = $this->countDays($dates[0], $dates[1]);

            if($isReccurent) {
                $location->setEstReccurent(true);
                $location->setPrix($vehicule->getPrix() * 0.9 * 30); //PROMOTION 10%
            }
            else {
                $location->setDateDebut($this->frDateToEn($dates[0]));
                $location->setDateFin($this->frDateToEn($dates[1]));
                $location->setEstReccurent(false);

                if($days >= 30) {
                    $location->setPrix($vehicule->getPrix() * 0.9 * $days);
                }
                else {
                    $location->setPrix($vehicule->getPrix() * $days);
                }
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

    private function isValidDate($dateDeb, $dateFin) {
        if($this->frDateToEn($dateDeb) < $this->frDateToEn($dateFin))
            if($this->frDateToEn($dateDeb) >= date('Y-m-d', time()))
                return true;
        return false;
    }

    private function countDays($dateDeb, $dateFin) {
        if($this->isValidDate($dateDeb, $dateFin)) {
            $dateDeb = $this->frDateToEn($dateDeb);
            $dateFin = $this->frDateToEn($dateFin);

            return $dateFin->diff($dateDeb)->format("%a") + 1;
        }
        return null;
    }

    private function frDateToEn($date_string) {
        return date_create(strtr(mb_strtolower($date_string), array('janvier'=>'jan','février'=>'feb','mars'=>'march','avril'=>'apr','mai'=>'may','juin'=>'jun','juillet'=>'jul','août'=>'aug','septembre'=>'sep','octobre'=>'oct','novembre'=>'nov','décembre'=>'dec')));
    }
}
