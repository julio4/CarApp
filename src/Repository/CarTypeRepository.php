<?php

namespace App\Repository;

use App\Entity\CarType;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Query\Expr;

/**
 * Permet de récupérer les types avec des véhicules disponible selon les dates
 *
 * @method CarType|null find($id, $lockMode = null, $lockVersion = null)
 * @method CarType|null findOneBy(array $criteria, array $orderBy = null)
 * @method CarType[]    findAll()
 * @method CarType[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CarTypeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CarType::class);
    }

    /**
     * @param $date
     * @return CarType[] Retourne tout les types où il y a au moins un véhicule disponible à la location
     * pour un paiement mensuel à partir de la date spécifiée
     */
    public function findAllAvailable($date)
    {
        $qb = $this->createQueryBuilder('type')
            ->innerJoin('App\Entity\Car','car', Expr\Join::WITH, 'type.id = car.type')
            ->leftJoin('App\Entity\Rent', 'rent', Expr\Join::WITH, 'car.id = rent.car')
            ->andWhere('rent is NULL OR rent.endDate < :date')
            ->andWhere(':date > :now')
            ->andWhere('car.available = 1 AND car.isArchived <> 1')
            ->setParameter('date', $date)
            ->setParameter('now', date('now'))
            ->groupBy('type');

        return $qb
            ->getQuery()
            ->getResult();
    }

    /**
     * @param $startDate
     * @param $endDate
     * @return CarType[] Retourne tout les types où il y a au moins un véhicule disponible à la location
     * entre les deux dates spécifiées
     */
    public function findAllAvailableBetween($startDate, $endDate)
    {
        $qb = $this->createQueryBuilder('type')
            ->innerJoin('App\Entity\Car','car', Expr\Join::WITH, 'type.id = car.type')
            ->leftJoin('App\Entity\Rent', 'rent', Expr\Join::WITH, 'car.id = rent.car')
            ->andWhere('rent is NULL 
            OR (rent.startDate < :startDate AND rent.endDate < :startDate) 
            OR (rent.startDate > :endDate AND rent.endDate > :endDate)
            AND :startDate >= CURRENT_TIMESTAMP() 
            AND :startDate <= :endDate')
            ->setParameter('startDate', $startDate->format('Y-m-d'))
            ->setParameter('endDate', $endDate->format('Y-m-d'))
            ->andWhere('car.available = 1 AND car.isArchived <> 1')
            ->groupBy('type');

        return $qb
            ->getQuery()
            ->getResult();
    }

}
