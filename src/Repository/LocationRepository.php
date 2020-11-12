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

    /**
     * @return Location|null cherche la location $id du loueur $loueur
     */
    public function findOneOf($id, $loueur)
    {
        return $this->createQueryBuilder('l')
            ->innerJoin('App\Entity\Vehicule','v', Expr\Join::WITH, 'v.id = l.vehicule')
            ->andWhere('l.id = :id AND v.loueur = :loueur')
            ->setParameter('id', $id)
            ->setParameter('loueur', $loueur)
            ->getQuery()
            ->getOneOrNullResult()
            ;
    }

     /**
      * @return Location[] les locations du loueur
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
            l.dateDebut <= :now AND l.dateFin >= :now,1,0) as enCours, IFELSE(l.estReccurent = 1 AND l.dateDebut > :now OR 
            l.dateDebut > :now AND l.dateFin > :now,1,0) as NonCommence')
            ->setParameter('now', date_create("now"))
            ->groupBy('l')
            ->getQuery()
            ->getResult()
            ;
    }

    public function findOfUserOfLoueur($user, $loueur)
    {
        return $this->createQueryBuilder('l')
            ->innerJoin('App\Entity\Vehicule','v', Expr\Join::WITH, 'v.id = l.vehicule')
            ->innerJoin('App\Entity\TypeVehicule','t', Expr\Join::WITH, 't.id = v.type')
            ->innerJoin('App\Entity\User','u', Expr\Join::WITH, 'l.user = u.id')
            ->andWhere('v.loueur = :loueur AND l.user = :user')
            ->setParameter('loueur', $loueur)
            ->setParameter('user', $user)
            ->orderBy('l.dateDebut', 'DESC')
            ->Select('l as location,IFELSE(l.estReccurent = 1 AND l.dateDebut <= :now OR 
            l.dateDebut <= :now AND l.dateFin >= :now,1,0) as enCours')
            ->setParameter('now', date_create("now"))
            ->groupBy('l')
            ->getQuery()
            ->getResult()
            ;
    }

    public function totalRevenus(){
        return $this->createQueryBuilder('l')
            ->select('sum(l.prix)')
            ->where('l.estPayee = :valeur')
            ->setParameter('valeur', '1')
            ->getQuery()
            ->getSingleScalarResult()
            ;
    }
}
