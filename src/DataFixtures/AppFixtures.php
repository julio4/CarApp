<?php

namespace App\DataFixtures;

use App\Entity\TypeVehicule;
use App\Entity\User;
use App\Entity\Vehicule;
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
            'mail' => 'admin@mail.com',
            'password' => 'password'
        ];
        $loueurCredentials = [
            'username' => 'loueurDemo',
            'mail' => 'loueurDemo@mail.com',
            'password' => 'password'
        ];
        $userCredentials = [
            'username' => 'userDemo',
            'mail' => 'userDemo@mail.com',
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

        $userDemo = new User();
        $userDemo->setName($userCredentials['username']);
        $userDemo->setEmail($userCredentials['mail']);
        $userDemo->setPassword(
            $this->encoder->encodePassword($userDemo,$userCredentials['password'])
        );
        $userDemo->setRoles(['ROLE_USER']);

        $type = new TypeVehicule();
        $src = __DIR__."/../../public/media/img/types/1.png";
        $file = new UploadedFile(
            $src,
            '1.png',
            'image/png',
            null,
            true //  Set test mode true !!! " Local files are used in test mode hence the code should not enforce HTTP uploads."
        );
        $type->setName('Porsche')
            ->setImageFile($file);

        $porsche1 = new Vehicule();
        $porsche1->setEtat('disponible');
        $porsche1->setPrix(24.5);
        $carac = array('boite' => 'automatique',
            'moteur' => 'diesel',
            'carburant' => 'essence');
        $porsche1->setCarac($carac);
        $porsche1->setType($type);
        $porsche1->setLoueur($loueurDemo);
        $src = __DIR__."/../../public/media/img/vehicules/ferrari-5faba6c0d2f31057397427.png";
        $file = new UploadedFile(
            $src,
            '5faba6c0d2f31057397427.png',
            'image/png',
            null,
            true //  Set test mode true !!! " Local files are used in test mode hence the code should not enforce HTTP uploads."
        );
        $porsche1->setImageFile($file);

        $porsche2 = new Vehicule();
        $porsche2->setEtat('disponible');
        $porsche2->setPrix(52.5);
        $carac = array('boite' => 'manuelle',
            'moteur' => 'diesell',
            'carburant' => 'essence');
        $porsche2->setCarac($carac);
        $porsche2->setType($type);
        $porsche2->setLoueur($loueurDemo);
        $src = __DIR__."/../../public/media/img/vehicules/ferrari-5faba6faea0b3939226100.png";
        $file = new UploadedFile(
            $src,
            'ferrari-5faba6faea0b3939226100.png',
            'image/png',
            null,
            true //  Set test mode true !!! " Local files are used in test mode hence the code should not enforce HTTP uploads."
        );
        $porsche2->setImageFile($file);

        $manager->persist($admin);
        $manager->persist($loueurDemo);
        $manager->persist($userDemo);
        $manager->persist($type);
        $manager->persist($porsche1);
        $manager->persist($porsche2);
        $manager->flush();
    }
}
