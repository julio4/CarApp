<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin", name="admin")
 */
class AdminController extends AbstractController
{
    /**
     * @Route("/", name="_panel")
     */
    public function panel()
    {
        $em = $this->getDoctrine()->getManager();
        $nbUser = $em->getRepository(User::class)->count(array());

        return $this->render('admin/index.html.twig', [
            'nbUsers' => $nbUser
        ]);
    }

    /**
     * @Route("/utilisateurs", name="_panel_utilisateur")
     */
    public function panel_userManager(UserRepository $userRepository)
    {
        $users = $userRepository->findAll();
        return $this->render('admin/users.html.twig', [
            'users' => $users
        ]);
    }

    /**
     * @Route("/utilisateurs/supprimer/{id}", requirements={"id" = "\d+"}, name="_panel_utilisateur_supprimer")
     */
    public function deleteUser($id)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $em->getRepository(User::class)->find($id);
        if (!$user) {
            $this->addFlash('error','Utilisateur ' . $id . ' non existant!');
            return $this->redirect($this->generateUrl('admin_panel_utilisateur'));
        }
        elseif ($user->checkIfAdmin()) {
            $this->addFlash('error','Aucune modification possible sur un utilisateur administrateur ');
            return $this->redirect($this->generateUrl('admin_panel_utilisateur'));
        }

        $em = $this->getDoctrine()->getManager();
        $em->remove($user);
        $em->flush();

        $this->addFlash('success','Utilisateur supprimé !');

        return $this->redirect($this->generateUrl('admin_panel_utilisateur'));
    }

    /**
     * @Route("/utilisateurs/loueur/{id}", requirements={"id" = "\d+"}, name="_panel_utilisateur_loueur")
     */
    public function setUserLoueur($id)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $em->getRepository(User::class)->find($id);

        if (!$user) {
            $this->addFlash('error','Utilisateur ' . $id . ' non existant!');
            return $this->redirect($this->generateUrl('admin_panel_utilisateur'));
        }
        elseif ($user->checkIfAdmin()) {
            $this->addFlash('error','Aucune modification possible sur un utilisateur administrateur ');
            return $this->redirect($this->generateUrl('admin_panel_utilisateur'));
        }

        $roles = ["ROLE_LOUEUR"];
        $user->setRoles($roles);
        $em->flush();

        $this->addFlash('success','Utilisateur a maintenant le rôle de Loueur !');

        return $this->redirect($this->generateUrl('admin_panel_utilisateur'));
    }

    /**
     * @Route("/utilisateurs/utilisateur/{id}", requirements={"id" = "\d+"}, name="_panel_utilisateur_utilisateur")
     */
    public function setUserUtilisateur($id)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $em->getRepository(User::class)->find($id);

        if (!$user) {
            $this->addFlash('error','Utilisateur ' . $id . ' non existant!');
            return $this->redirect($this->generateUrl('admin_panel_utilisateur'));
        }
        elseif ($user->checkIfAdmin()) {
            $this->addFlash('error','Aucune modification possible sur un utilisateur administrateur ');
            return $this->redirect($this->generateUrl('admin_panel_utilisateur'));
        }

        $roles = ["ROLE_USER"];
        $user->setRoles($roles);
        $em->flush();

        $this->addFlash('success','Utilisateur a maintenant le rôle d\'utilisateur !');

        return $this->redirect($this->generateUrl('admin_panel_utilisateur'));
    }
}
