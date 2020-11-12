<?php

namespace App\Repository;

use App\Entity\TypeVehicule;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Query\Expr;

/**
 * @method TypeVehicule|null find($id, $lockMode = null, $lockVersion = null)
 * @method TypeVehicule|null findOneBy(array $criteria, array $orderBy = null)
 * @method TypeVehicule[]    findAll()
 * @method TypeVehicule[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TypeVehiculeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TypeVehicule::class);
    }

    /**
     * @return TypeVehicule[] Returns an array of TypeVehicule
     */
    public function findAllAvailable($date)
    {
        $qb = $this->createQueryBuilder('t')
            ->innerJoin('App\Entity\Vehicule','v', Expr\Join::WITH, 't.id = v.type')
            ->leftJoin('App\Entity\Location', 'l', Expr\Join::WITH, 'v.id = l.vehicule')
            ->andWhere('l is NULL OR l.dateFin < :date')
            ->andWhere(':date > :now')
            ->andWhere('v.disponible = 1')
            ->setParameter('date', $date)
            ->setParameter('now', date('now'))
            ->groupBy('t');

        return $qb
            ->getQuery()
            ->getArrayResult();
    }

    /**
     * @return TypeVehicule[] Returns an array of TypeVehicule
     */
    public function findAllAvailableBetween($dateDebut, $dateFin)
    {
        $qb = $this->createQueryBuilder('t')
            ->innerJoin('App\Entity\Vehicule','v', Expr\Join::WITH, 't.id = v.type')
            ->leftJoin('App\Entity\Location', 'l', Expr\Join::WITH, 'v.id = l.vehicule')
            ->andWhere('l is NULL OR (l.dateDebut < :dateDebut AND l.dateFin < :dateDebut) OR (l.dateDebut > :dateFin AND l.dateFin > :dateFin)
            AND :dateDebut >= CURRENT_TIMESTAMP() AND :dateDebut <= :dateFin')
            ->setParameter('dateDebut', $dateDebut->format('Y-m-d'))
            ->setParameter('dateFin', $dateFin->format('Y-m-d'))
            ->andWhere('v.disponible = 1')
            ->groupBy('t');

        return $qb
            ->getQuery()
            ->getArrayResult();
    }

}
