<?php

namespace App\Controller;

use App\Entity\Rent;
use App\Entity\Car;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * Permet de confirmer et d'enregistrer une nouvelle location
 *
 * @Route("/location", name="location")
 */
class RentController extends AbstractController
{
    /**
     * @Route("/vehicule/{id}", methods={"POST"}, name="_louer")
     * @param $id
     * @param UserInterface $user
     * @return RedirectResponse
     */
    public function rent($id, UserInterface $user)
    {
        $em = $this->getDoctrine()->getManager();
        $car = $em->getRepository(Car::class)->find($id);

        if($this->isGranted("ROLE_USER")) {

            //On récupère le cookie pour les dates
            if(!$this->get('session')->has('recurring'))
                $this->get('session')->set('recurring', true);
            $estRecurrent = $this->get('session')->get('recurring') ? true : false;

            $rent = new Rent();
            $rent->setCar($car);
            $rent->setUser($user);
            $rent->setIsPaid(false);
            $rent->setPaidMonths(0);
            $rent->setFinished(false);

            if (!$estRecurrent) {
                if ($this->isValidCookieDates()) {
                    $days = $this->countDays();
                    $rent->setStartDate($this->frDateToEn($this->get('session')->get('startDate')));
                    $rent->setEndDate($this->frDateToEn($this->get('session')->get('endDate')));
                    $rent->setIsMonthlyRecurring(false);
                    $rent->setDuration($days);
                    if($days >= 30) {
                        $rent->setPrice($car->getPrice() * 0.9 * $days);
                        $rent->setPaidMonths(0);
                    }
                    else {
                        $rent->setPrice($car->getPrice() * $days);
                    }
                } else {
                    $this->addFlash('danger', 'Erreur, veuillez accepter nos cookies pour le bon fonctionnement du site');
                    return $this->redirect($this->generateUrl('index_type', ["id" => $car->getType()->getId()]));
                }
            } else {
                $rent->setFinished(false);
                if ($this->isValidDate($this->get('session')->get('startDate',''))) {
                    $rent->setIsMonthlyRecurring(true);
                    $rent->setPrice($car->getPrice() * 0.9 * 30);
                    $rent->setStartDate($this->frDateToEn($this->get('session')->get('startDate')));
                } else {
                    $this->addFlash('danger', 'Erreur, veuillez accepter nos cookies pour le bon fonctionnement du site');
                    return $this->redirect($this->generateUrl('index_type', ["id" => $car->getType()->getId()]));
                }
            }
            $car->addRental($rent);
            $em = $this->getDoctrine()->getManager();
            $em->persist($car);
            $em->persist($rent);
            $em->flush();
            $this->addFlash('success','Nouvelle réservation <a href="'.$this->generateUrl("user_rent_detail",['id'=>$rent->getId()]).'">#'. $rent->getId() . '</a> validée à payer.');
        }
        else {
            $this->addFlash('danger','Veuiller vous <a href="'.$this->generateUrl("app_login").'">connecter</a> avec un compte utilisateur pour pouvoir louer des véhicules');
        }
        return $this->redirect($this->generateUrl('index_type', ["id" => $car->getType()->getId()]));
    }

    /**
     * Valide l'intervalle de date
     * @param $startDate
     * @param $endDate
     * @return bool
     */
    private function isValidDates($startDate, $endDate) {
        if($this->frDateToEn($startDate) < $this->frDateToEn($endDate))
            if($this->frDateToEn($startDate) >= date('Y-m-d', time()))
                return true;
        return false;
    }

    /**
     * Valide une date
     * @param $date
     * @return bool
     */
    private function isValidDate($date) {
        if($this->frDateToEn($date) >= date('Y-m-d', time()))
            return true;
        return false;
    }

    /**
     * Vérifie que les dates contenues dans les cookies ne sont pas erronées
     * (si cookies anciens ou modifications tierces)
     */
    private function isValidCookieDates() {
        if ($this->get('session')->has('recurring') and !$this->get('session')->get('recurring'))
            if($this->get('session')->has('startDate') and $this->get('session')->has('endDate')) {
                return $this->isValidDates($this->get('session')->get('startDate'), $this->get('session')->get('endDate'));
            }
        return false;
    }

    /**
     * Compte le nombre de jours de l'intervalle de dates des cookies
     */
    private function countDays() {
        if($this->isValidCookieDates()) {
            $startDate = $this->frDateToEn($this->get('session')->get('startDate'));
            $endDate = $this->frDateToEn($this->get('session')->get('endDate'));

            return $endDate->diff($startDate)->format("%a") + 1;
        }
        return null;
    }

    private function frDateToEn($date_string) {
        return date_create(strtr(mb_strtolower($date_string), array('janvier'=>'jan','février'=>'feb','mars'=>'march','avril'=>'apr','mai'=>'may','juin'=>'jun','juillet'=>'jul','août'=>'aug','septembre'=>'sep','octobre'=>'oct','novembre'=>'nov','décembre'=>'dec')));
    }
}
