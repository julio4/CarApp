<?php

namespace App\Form;

use App\Entity\CarType;
use App\Entity\Car;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;

class CarFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('type', EntityType::class, [
                'label' => 'Modèle',
                'class' => CarType::class,
                'choice_label' => 'name',
                'attr' => [
                    'class' => "selectpicker form-control",
                    'data-live-search' => "true",
                    'data-style' => "btn btn-primary border"
                ]
            ])
            ->add('price', NumberType::class, [
                'label' => 'Prix',
                'scale' => 2,
                'attr' => [
                    'value' => "0",
                    'data-suffix' => "€/jour",
                    "data-decimals" => "2",
                    "min" => "1",
                    "max" => strval(20000),
                    "step" => "1",
                    "class" => "numberpicker"
                ]
            ])
            ->add('boite', ChoiceType::class, [
                "mapped" => false,
                'choices' => [
                    'Manuelle' => 'Manuelle',
                    'Automatique à simple embrayage' => 'Automatique à simple embrayage',
                    'Automatique à double embrayage' => 'Automatique à double embrayage',
                    'Automatique à convertisseur de couple' => 'Automatique à convertisseur de couple',
                    'Transmission à variation continue' => 'Transmission à variation continue',
                    'Séquentielle' => 'Séquentielle'
                ],
            ])
            ->add('moteur', ChoiceType::class, [
                "mapped" => false,
                'choices' => [
                    'Diesel' => 'Diesel',
                    'Essence' => 'Essence',
                    'GPL' => 'GPL',
                    'Hybride' => 'Hybride',
                    'Electrique' => 'Electrique'
                ],
            ])
            ->add('carburant', ChoiceType::class, [
                "mapped" => false,
                'choices' => [
                    'Electrique' => 'Electrique',
                    'Gazole' => 'Gazole',
                    'SP95-E10' => 'SP95-E10',
                    'GPLc' => 'GPLc',
                    'SP98' => 'SP98',
                    'SP95' => 'SP95',
                    'E85' => 'E85'
                ],
            ])
            ->add('available',  CheckboxType::class, [
                'label'    => 'Rendre disponible directement ?',
                'required' => false,
                'value' => 'available',
                'label_attr' => ['class' => 'switch-custom']
            ])
            ->add('imageFile', VichImageType::class, [
                'required' => false,
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
                'asset_helper' => true,
            ])
            ->add('save', SubmitType::class, [
                'attr' => [
                    'class' => 'btn btn-lg btn-primary my-4'
                ],
                'label' => "Ajouter"
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Car::class,
        ]);
    }
}
