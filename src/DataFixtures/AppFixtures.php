<?php

namespace App\DataFixtures;

use App\Entity\TypeVehicule;
use App\Entity\User;
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

        $manager->persist($admin);
        $manager->persist($loueurDemo);
        $manager->persist($userDemo);
        $manager->persist($type);
        $manager->flush();
    }
}
