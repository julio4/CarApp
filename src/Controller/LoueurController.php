<?php

namespace App\Controller;

use App\Entity\TypeVehicule;
use App\Entity\Vehicule;
use App\Repository\VehiculeRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints\File;
use Vich\UploaderBundle\Form\Type\VichImageType;

/**
 * @Route("/loueur", name="loueur")
 */
class LoueurController extends AbstractController
{
    /**
     * @Route("/", name="_panel")
     */
    public function dashboard()
    {
        return $this->render('loueur/index.html.twig');
    }

    /**
     * @Route("/vehicules", name="_vehicules")
     */
    public function vehicules(VehiculeRepository $vehiculeRepository, UserInterface $user)
    {
        $vehicules = $vehiculeRepository->findOwnedBy($user);

        return $this->render('loueur/vehicules.html.twig', [
            "vehicules" => $vehicules
        ]);
    }

    /**
     * @Route("/modele/ajouter", name="_type_ajouter")
     */
    public function ajoutType(Request $request)
    {
        //TODO vérifier automatiquement que le type ajouter n'existe pas
        $form = $this->createFormBuilder()
            ->add('nom', TextType::class, [
                'label' => 'Nom',
                'data' => $request->request->get('default_name', null)
            ])
            ->add('img', VichImageType::class, [
                'required' => true,
                'allow_delete' => true,
                'label' => 'Parcourir',
                'label_attr' => [
                    'class' => 'custom-file-label',
                    'data-browse' => 'Parcourir'
                ],
                'delete_label' => 'Supprimer',
                'download_label' => 'Télécharger',
                'download_uri' => true,
                'image_uri' => true,
//                'imagine_pattern' => '...', If set, image will automatically transformed using LiipImagineBundle. ex 'imagine_pattern' => 'product_photo_320x240',
                'asset_helper' => true,
            ])
            ->add('save', SubmitType::class, [
                'attr' => [
                    'class' => 'btn btn-lg btn-primary my-4'
                ],
                'label' => "Ajouter"
            ])
            ->getForm();

        //TODO Dynamic form validation http://growingcookies.com/en/dynamic-form-validation-in-symfony-using-ajax/
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            $type = new TypeVehicule();
            $type->setName($data['nom']);
            $type->setImageFile($data['img']);

            $em = $this->getDoctrine()->getManager();
            $em->persist($type);
            $em->flush();

            return $this->redirect($this->generateUrl('loueur_vehicules_ajouter'));
        }

        return $this->render('loueur/type_formulaire.html.twig', [
            'form' => $form->createView()
        ]);
    }


    /**
     * @Route("/vehicules/ajouter", name="_vehicules_ajouter")
     */
    public function ajoutVehicules(Request $request)
    {
        $PRIX_MAX = 20000;
        $form = $this->createFormBuilder()
            ->add('type', EntityType::class, [
                'label' => 'Modèle',
                'class' => TypeVehicule::class,
                'choice_label' => 'name',
                'attr' => [
                    'class' => "selectpicker form-control",
                    'data-live-search' => "true",
                    'data-style' => "btn-primary"
                ]
            ])
            ->add('prix', NumberType::class, [
                'attr' => [
                    'value' => "0",
                    'data-suffix' => "€/jour",
                    "data-decimals" => "2",
                    "min" => "1",
                    "max" => strval($PRIX_MAX),
                    "step" => "1",
                    "class" => "numberpicker"
                ]
            ])
            ->add('boite', ChoiceType::class, [
                'choices' => [
                    'Automatique' => 'auto',
                    'Manuelle' => 'manuelle'
                ],
            ])
            ->add('moteur', ChoiceType::class, [
                'choices' => [
                    'Diesel' => 'diesel',
                    'Hybride' => 'hybride'
                ],
            ])
            ->add('carburant', ChoiceType::class, [
                'choices' => [
                    'Essence' => 'essence',
                    'Pétrole' => 'petrole'
                ],
            ])
            ->add('img', VichImageType::class, [
                'required' => true,
                'allow_delete' => true,
                'label' => 'Parcourir',
                'label_attr' => [
                    'class' => 'custom-file-label',
                    'data-browse' => 'Parcourir'
                ],
                'delete_label' => 'Supprimer',
                'download_label' => 'Télécharger',
                'download_uri' => true,
                'image_uri' => true,
//                'imagine_pattern' => '...', If set, image will automatically transformed using LiipImagineBundle. ex 'imagine_pattern' => 'product_photo_320x240',
                'asset_helper' => true,
            ])
            ->add('etat',  CheckboxType::class, [
                'label'    => 'Rendre disponible directement ?',
                'required' => false,
                'value' => 'disponible',
                'label_attr' => ['class' => 'switch-custom']
            ])
            ->add('save', SubmitType::class, [
                'attr' => [
                    'class' => 'btn btn-lg btn-primary my-4'
                ],
                'label' => "Ajouter"
            ])
            ->getForm();

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            $vehicule = new Vehicule();
            $vehicule->setType($data['type']);
            $vehicule->setPrix($data['prix']);
            $carac = array('boite' => $data['boite'],
                'moteur' => $data['moteur'],
                'carburant' => $data['carburant']);
            $vehicule->setCarac($carac);
            $vehicule->setImageFile($data['img']);
            $etat = $data['etat'] ? 'Disponible' : 'Non disponible';
            $vehicule->setEtat($etat);
            // \App\Entity\User implémente UserInterface donc erreur à ignorer
            $vehicule->setLoueur($this->getUser());
            $data['type']->addVehicule($vehicule);

            $em = $this->getDoctrine()->getManager();
            $em->persist($vehicule);
            $em->persist($data['type']);
            $em->flush();

            return $this->redirect($this->generateUrl('loueur_vehicules'));
        }

        return $this->render('loueur/vehicules_formulaire.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route ("/vehicules/modifier/{id}", name="_vehicules_modifier")
     */
    public function modifVehicules($id, Request $request){
        $em = $this->getDoctrine()->getManager();
        $vehicule = $em->getRepository(Vehicule::class)->find($id);

        return $this->render('loueur/vehicules_modifier.html.twig', [
            'id' => $id
        ]);
    }

    /**
     * @Route ("/clients", name="_clients")
     */
    public function afficherClients(VehiculeRepository $vehiculeRepository, UserInterface $user){

        $vehicules = $vehiculeRepository->findOwnedBy($user);
        return $this->render('loueur/clients.html.twig', [
            "vehicules" => $vehicules
        ]);

    }

    /**
     * @Route ("/reservations", name="_reservations")
     */
    public function afficherResa(VehiculeRepository $vehiculeRepository, UserInterface $user){

        $vehicules = $vehiculeRepository->findOwnedBy($user);
        return $this->render('loueur/reservations.html.twig', [
            "vehicules" => $vehicules
        ]);

    }

    /**
     * @Route ("/statistiques", name="_statistiques")
     */
    public function afficherStats(VehiculeRepository $vehiculeRepository, UserInterface $user){

        $vehicules = $vehiculeRepository->findOwnedBy($user);
        return $this->render('loueur/statistiques.html.twig', [
            "vehicules" => $vehicules
        ]);

    }
}
