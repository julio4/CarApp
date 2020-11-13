<?php

namespace App\DataFixtures;

use App\Entity\CarType;
use App\Entity\User;
use App\Entity\Car;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AppFixtures extends Fixture
{

    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public function load(ObjectManager $manager)
    {
        $adminCredentials = [
            'username' => 'admin',
            'mail' => 'admin@carapp.com',
            'password' => 'password'
        ];
        $loueurCredentials = [
            'username' => 'loueur',
            'mail' => 'loueur@carapp.com',
            'password' => 'password'
        ];

        $admin = new User();
        $admin->setName($adminCredentials['username']);
        $admin->setEmail($adminCredentials['mail']);
        $admin->setPassword(
            $this->encoder->encodePassword($admin,$adminCredentials['password'])
        );
        $admin->setRoles(['ROLE_ADMIN']);

        $loueurDemo = new User();
        $loueurDemo->setName($loueurCredentials['username']);
        $loueurDemo->setEmail($loueurCredentials['mail']);
        $loueurDemo->setPassword(
            $this->encoder->encodePassword($loueurDemo,$loueurCredentials['password'])
        );
        $loueurDemo->setRoles(['ROLE_LOUEUR']);

//        $type = new CarType();
//        copy(__DIR__."/../../public/media/img/fixtures/porsche.png", __DIR__."/../../public/media/img/fixtures/porsche_type.png");
//        $src = __DIR__."/../../public/media/img/fixtures/porsche_type.png";
//        $file = new UploadedFile(
//            $src,
//            'porsche_type.png',
//            'image/png',
//            null,
//            true
//        );
//        $type->setName('Porsche')
//            ->setImageFile($file);
//
//        $porsche1 = new Car();
//        $porsche1->setAvailable(1);
//        $porsche1->setPrice(24.5);
//        $features = array('boite' => 'Automatique',
//            'moteur' => 'Electrique',
//            'carburant' => 'Electrique');
//        $porsche1->setFeatures($features);
//        $porsche1->setType($type);
//        $porsche1->setRenter($loueurDemo);
//        copy(__DIR__."/../../public/media/img/fixtures/voiture.png", __DIR__."/../../public/media/img/fixtures/voiture_vehicule.png");
//        $src = __DIR__."/../../public/media/img/fixtures/voiture_vehicule.png";
//        $file = new UploadedFile(
//            $src,
//            'voiture_vehicule.png',
//            'image/png',
//            null,
//            true
//        );
//        $porsche1->setImageFile($file);
//        $porsche1->setIsArchived(false);

        $manager->persist($admin);
        $manager->persist($loueurDemo);
//        $manager->persist($userDemo);
//        $manager->persist($type);
//        $manager->persist($porsche1);
        $manager->flush();
    }
}
