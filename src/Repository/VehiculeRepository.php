<?php

namespace App\Repository;

use App\Entity\TypeVehicule;
use App\Entity\User;
use App\Entity\Vehicule;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Query\Expr;

/**
 * @method Vehicule|null find($id, $lockMode = null, $lockVersion = null)
 * @method Vehicule|null findOneBy(array $criteria, array $orderBy = null)
 * @method Vehicule[]    findAll()
 * @method Vehicule[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VehiculeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Vehicule::class);
    }

    /**
     * @return Vehicule[] Retourne tous les véhicules du loueur $username
     */
    public function findOwnedBy(User $user): array
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.loueur = :user')
            ->setParameter('user', $user)
            ->orderBy('p.miseAJour', 'DESC')
            ->getQuery()
            ->getResult()
            ;
    }

//    /**
//     * @return Vehicule Retourne tous les véhicules du loueur $username
//     */
//    public function findLowestPrice(TypeVehicule $type): Vehicule
//    {
//        return $this->createQueryBuilder('v')
//            ->select('MIN(v.prix) AS min_prix')
//            ->where('v.type = :type')
//            ->setParameter('type', $type)
//            ->orderBy('min_prix', 'ASC')
//            ->getQuery()
//            ->getSingleResult();
//    }

    // /**
    //  * @return Vehicule[] Returns an array of Vehicule objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('v.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Vehicule
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}