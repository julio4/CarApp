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
            if($this->isValidDate($dates[0], $dates[1])) {
                $isReccurent = false;
                $this->get('session')->set('dateDebut', $dates[0]);
                $this->get('session')->set('dateFin', $dates[1]);
            }
            else {
                $this->addFlash('danger','Erreur, veuillez accepter nos cookies pour le bon fonctionnement du site');
                return $this->redirect($this->generateUrl('index_type', ["id" => $vehicule->getType()->getId()]));
            }
        }
        else {
            $isReccurent = true;
        }
        if($this->isGranted("ROLE_USER")) {

            $location = new Location();
            $location->setVehicule($vehicule);
            $location->setUser($this->getUser());
            $location->setEstPayee(false);

            if($isReccurent) {
                $location->setEstReccurent(true);
                $location->setPrix($vehicule->getPrix() * 0.9 * 30); //PROMOTION 10%
                $location->setDateDebut(date_create("now"));
            }
            else {
                $days = $this->countDays($dates[0], $dates[1]);

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
            $this->addFlash('success','Nouvelle réservation <a href="'. "TODO lien vers facture/location" .'">#'. $location->getId() . '</a> validée à payer.');
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

    /**
     * @Route("/details/{id}", name="_location_recap")
     */
    public function recapLocation($id, Request $request){
        $em = $this->getDoctrine()->getManager();
        $location = $em->getRepository(Location::class)->find($id);

        return $this->render('user/location_recap.html.twig', [
            'id' => $id,
            'location' => $location
        ]);
    }
}
