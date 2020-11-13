<?php

namespace App\Controller;

use App\Entity\Car;
use App\Entity\Rent;
use App\Entity\User;
use App\Repository\RentRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Ce panel d'administration permet la gestion des utilisateurs au sein du site
 *
 * @Route("/admin", name="admin")
 */
class AdminController extends AbstractController
{
    /**
     * La page d'accueil du panel
     *
     * @Route("/", name="_panel")
     * @param UserRepository $userRepository
     * @param RentRepository $rentRepository
     * @return Response
     */
    public function panel(UserRepository $userRepository, RentRepository $rentRepository)
    {
        $em = $this->getDoctrine()->getManager();
        $nbUser = $em->getRepository(User::class)->count(array());
        $nbLocations = $em->getRepository(Rent::class)->count(array());
        $nbVehicules = $em->getRepository(Car::class)->count(array());
        $rent =  $rentRepository->findAll();
        $users = $userRepository->findAll();

        return $this->render('admin/index.html.twig', [
            'nbUsers' => $nbUser,
            'nbLocations' => $nbLocations,
            'nbVehicules' => $nbVehicules,
            'rent' => $rent,
            'users' => $users
        ]);
    }

    /**
     * Permet de supprimer un utilisateur
     *
     * @Route("/utilisateurs/supprimer/{id}", requirements={"id" = "\d+"}, name="_panel_utilisateur_supprimer")
     * @param $id
     * @param UserRepository $userRepository
     * @return RedirectResponse
     */
    public function deleteUser($id, UserRepository $userRepository)
    {
        $user = $userRepository->find($id);

        if (!$user) {
            $this->addFlash('error','Utilisateur ' . $id . ' non existant!');
            return $this->redirect($this->generateUrl('admin_panel'));
        }
        elseif ($user->checkIfAdmin()) {
            $this->addFlash('error','Aucune modification possible sur un utilisateur administrateur ');
            return $this->redirect($this->generateUrl('admin_panel'));
        }

        $em = $this->getDoctrine()->getManager();
        $em->remove($user);
        $em->flush();

        $this->addFlash('success','Utilisateur supprimé !');

        return $this->redirect($this->generateUrl('admin_panel'));
    }

    /**
     * Permet de passer un utilisateur en mode renter
     *
     * @Route("/utilisateurs/renter/{id}", requirements={"id" = "\d+"}, name="_panel_utilisateur_loueur")
     * @param $id
     * @param UserRepository $userRepository
     * @return RedirectResponse
     */
    public function setUserLoueur($id, UserRepository $userRepository)
    {
        $user = $userRepository->find($id);

        if (!$user) {
            $this->addFlash('error','Utilisateur ' . $id . ' non existant!');
            return $this->redirect($this->generateUrl('admin_panel'));
        }
        elseif ($user->checkIfAdmin()) {
            $this->addFlash('error','Aucune modification possible sur un utilisateur administrateur ');
            return $this->redirect($this->generateUrl('admin_panel'));
        }

        $roles = ["ROLE_LOUEUR"];
        $user->setRoles($roles);
        $this->getDoctrine()->getManager()->flush();

        $this->addFlash('success','Utilisateur ' . $id . ' a maintenant le rôle de Loueur !');

        return $this->redirect($this->generateUrl('admin_panel'));
    }

    /**
     * Permet de passer un renter en mode utilisateur
     *
     * @Route("/utilisateurs/utilisateur/{id}", requirements={"id" = "\d+"}, name="_panel_utilisateur_utilisateur")
     * @param $id
     * @param UserRepository $userRepository
     * @return RedirectResponse
     */
    public function setUserUtilisateur($id, UserRepository $userRepository)
    {
        $user = $userRepository->find($id);

        if (!$user) {
            $this->addFlash('error','Utilisateur ' . $id . ' non existant!');
            return $this->redirect($this->generateUrl('admin_panel'));
        }
        elseif ($user->checkIfAdmin()) {
            $this->addFlash('error','Aucune modification possible sur un utilisateur administrateur ');
            return $this->redirect($this->generateUrl('admin_panel'));
        }

        $roles = ["ROLE_USER"];
        $user->setRoles($roles);
        $this->getDoctrine()->getManager()->flush();

        $this->addFlash('success','Utilisateur ' . $id . ' a maintenant le rôle d\'utilisateur !');

        return $this->redirect($this->generateUrl('admin_panel'));
    }
}