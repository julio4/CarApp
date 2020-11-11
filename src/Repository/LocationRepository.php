<?php

namespace App\Repository;

use App\Entity\Location;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Query\Expr;

/**
 * @method Location|null find($id, $lockMode = null, $lockVersion = null)
 * @method Location|null findOneBy(array $criteria, array $orderBy = null)
 * @method Location[]    findAll()
 * @method Location[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LocationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Location::class);
    }

    // /**
    //  * @return Location[] Returns an array of Location objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('l.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Location
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
    public function findLoueur($loueur)
    {
        return $this->createQueryBuilder('l')
            ->innerJoin('App\Entity\Vehicule','v', Expr\Join::WITH, 'v.id = l.vehicule')
            ->innerJoin('App\Entity\TypeVehicule','t', Expr\Join::WITH, 't.id = v.type')
            ->innerJoin('App\Entity\User','u', Expr\Join::WITH, 'l.user = u.id')
            ->andWhere('v.loueur = :loueur')
            ->setParameter('loueur', $loueur)
            ->orderBy('l.dateDebut', 'DESC')
            ->Select('l as location,IFELSE(l.estReccurent = 1 AND l.dateDebut <= :now OR 
            l.dateDebut <= :now AND l.dateFin >= :now,1,0) as enCours')
            ->setParameter('now', date_create("now"))
            ->groupBy('l')
            ->getQuery()
            ->getResult()
            ;
    }
}
