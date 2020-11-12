<?php

namespace App\Repository;

use App\Entity\TypeVehicule;
use App\Entity\User;
use App\Entity\Vehicule;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Query\Expr;
use DoctrineExtensions\Query\Mysql\Date;

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
    public function findOwnedBy(User $loueur)
    {
        return $this->createQueryBuilder('v')
            ->leftJoin('App\Entity\Location','l', Expr\Join::WITH, 'v.id = l.vehicule')
            ->andWhere('v.loueur = :loueur')
            ->setParameter('loueur', $loueur)
            ->select('v as vehicule, IFELSE(l.estReccurent = 1 AND l.dateDebut <= :now OR 
            l.dateDebut <= :now AND l.dateFin >= :now,1,0) as estLoue')
            ->setParameter('now', date_create("now"))
            ->groupBy('v')
            ->getQuery()
            ->getResult()
            ;
    }

    /**
     * @return Vehicule[] Retourne les véhicules d'un type donné disponible pour une réservation sans date
     */
    public function findAllAvailableByType(TypeVehicule $type)
    {
        $qb = $this->createQueryBuilder('v')
            ->leftJoin('App\Entity\Location', 'l', Expr\Join::WITH, 'v.id = l.vehicule')
            ->andWhere('v.type = :type')
            ->setParameter('type', $type)
            ->andWhere('l is NULL OR l.dateFin < :now')
            ->setParameter('now', date_create("now"));

        return $qb
            ->getQuery()
            ->getArrayResult();
    }

    /**
     * @return Vehicule[] Retourne les véhicules d'un type donné disponible pour une réservation sans date
     */
    public function findAllAvailableByTypeAt($date, TypeVehicule $type)
    {
        $qb = $this->createQueryBuilder('v')
            ->leftJoin('App\Entity\Location', 'l', Expr\Join::WITH, 'v.id = l.vehicule')
            ->andWhere('v.type = :type')
            ->setParameter('type', $type)
            ->andWhere('l is NULL OR l.dateFin < :date')
            ->setParameter('date', $date);

        return $qb
            ->getQuery()
            ->getArrayResult();
    }

    /**
     * @return Vehicule[] Retourne les véhicules d'un type donné disponible pour une réservation entre les dates précisées
     */
    public function findAllAvailableByTypeBetween(TypeVehicule $type, $dateDebut, $dateFin)
    {
        $qb = $this->createQueryBuilder('v')
            ->andWhere('v.type = :type')
            ->setParameter('type', $type)
            ->leftJoin('App\Entity\Location', 'l', Expr\Join::WITH, 'v.id = l.vehicule')
            ->andWhere('l is NULL OR (l.dateDebut < :dateDebut AND l.dateFin < :dateDebut) OR (l.dateDebut > :dateFin AND l.dateFin > :dateFin)')
            ->setParameter('dateDebut', $dateDebut->format('Y-m-d'))
            ->setParameter('dateFin', $dateFin->format('Y-m-d'));

        return $qb
            ->getQuery()
            ->getArrayResult();
    }

}
