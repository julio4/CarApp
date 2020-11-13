<?php

namespace App\Controller;

use App\Repository\RentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * Permet à un utilisateur de gérer son compte ,de voir ses locations et de payer ses factures
 *
 * @Route("/compte", name="user")
 */
class UserController extends AbstractController
{
    /**
     * Panel d'accueil récapitulatif
     *
     * @Route("/", name="_panel")
     * @param RentRepository $rentRepository
     * @return Response
     */
    public function index(RentRepository $rentRepository)
    {
        $rents = $rentRepository->findBy(['user' => $this->getUser()]);
        return $this->render('user/index.html.twig', [
            'rentals' => $rents,
        ]);
    }

    /**
     * Affiche les locations
     *
     * @Route("/locations", name="_rents")
     * @param RentRepository $rentRepository
     * @param UserInterface $user
     * @return Response
     */
    public function locations(RentRepository $rentRepository, UserInterface $user)
    {
        $nbMonthToPay = $rentRepository->findWithNbMoisAPayee($user);

        return $this->render('user/rents.html.twig', [
            'rentals' => $nbMonthToPay,
        ]);
    }

    /**
     * Met fin à une location mensuelle
     *
     * @Route("/stop/{id}", name="_stopMonthlyRent")
     * @param RentRepository $rentRepository
     * @return Response
     */
    public function stop($id, UserInterface $user, RentRepository $rentRepository)
    {
        $rent = $rentRepository->find($id);

        if($rent->getIsMonthlyRecurring()) {
            if($rent->getUser()->getUsername() == $this->getUser()->getUsername()){
                $rent->setFinished(true);
                $this->getDoctrine()->getManager()->flush();

                $this->addFlash('success','La location a été stoppé pour le mois prochain!');
            }
            else {
                $this->addFlash('error','Erreur, location inexistante ou inaccessible!');
            }
        }
        else {
            $this->addFlash('error','Erreur, vous ne pouvez pas mettre fin à une réservation non mensuelle!');
        }
        return $this->redirect($this->generateUrl('user_rents'));
    }

    /**
     * Permet de payer intégralement la location
     *
     * @Route("/facturation/{id}", name="_billing")
     * @param $id
     * @param RentRepository $rentRepository
     * @param UserInterface $user
     * @return RedirectResponse
     */
    public function facturation($id, RentRepository $rentRepository, UserInterface $user){
        $rent = $rentRepository->findOneBy(['id' => $id, 'user' => $user]);

        if($rent != null) {
            $rent->setIsPaid(true);

            $em = $this->getDoctrine()->getManager();
            $em->flush();

            $this->addFlash('success', 'Paiement pour la location #'.$id.' effectué avec succès!');
            return $this->redirect($this->generateUrl('user_rents'));
        }
        else {
            $this->addFlash('danger','Erreur facturation inaccessible ou inexistante!');
            return $this->redirect($this->generateUrl('user_rents'));
        }
    }

    /**
     * Permet de payer pour le mois courant la location
     *
     * @Route("/facturation_mois/{id}", name="_RecurringBilling")
     * @param $id
     * @param RentRepository $rentRepository
     * @param UserInterface $user
     * @return RedirectResponse
     */
    public function facturationMois($id, RentRepository $rentRepository, UserInterface $user){
        $rent = $rentRepository->findOneBy(['id' => $id, 'user' => $user]);

        if($rent != null) {
            $rent->setPaidMonths($rent->getPaidMonths()+1);

            $em = $this->getDoctrine()->getManager();
            $em->flush();

            $this->addFlash('success', 'Paiement mensuel pour la location #'.$id.' effectué avec succès!');
            return $this->redirect($this->generateUrl('user_rents'));
        }
        else {
            $this->addFlash('danger','Erreur facturation inaccessible ou inexistante!');
            return $this->redirect($this->generateUrl('user_rents'));
        }
    }

    /**
     * Permet d'annuler
     *
     * @Route("/facturation_mois/{id}", name="_RecurringBilling")
     * @param $id
     * @param RentRepository $rentRepository
     * @param UserInterface $user
     * @return RedirectResponse
     */
    public function cancel($id, RentRepository $rentRepository, UserInterface $user){
        $rent = $rentRepository->findOneBy(['id' => $id, 'user' => $user]);

        if($rent != null) {
            $rent->setPaidMonths($rent->getPaidMonths()+1);

            $em = $this->getDoctrine()->getManager();
            $em->flush();

            $this->addFlash('success', 'Paiement mensuel pour la location #'.$id.' effectué avec succès!');
            return $this->redirect($this->generateUrl('user_rents'));
        }
        else {
            $this->addFlash('danger','Erreur facturation inaccessible ou inexistante!');
            return $this->redirect($this->generateUrl('user_rents'));
        }
    }

    /**
     * Affiche un récapitulatif d'une location
     *
     * @Route("/details/{id}", name="_rent_detail")
     * @param $id
     * @param RentRepository $rentRepository
     * @param UserInterface $user
     * @return RedirectResponse|Response
     */
    public function recapLocation($id, RentRepository $rentRepository, UserInterface $user){
        $rent = $rentRepository->findOneBy(['id' => $id, 'user' => $user]);
        if($rent != null) {
            return $this->render('user/rent_details.html.twig', [
                'rent' => $rent
            ]);
        }
        else {
            $this->addFlash('danger','Erreur location inaccessible ou inexistante!');
            return $this->redirect($this->generateUrl('user_rents'));
        }
    }
}
