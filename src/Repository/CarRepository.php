<?php

namespace App\Repository;

use App\Entity\CarType;
use App\Entity\Car;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Query\Expr;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @method Car|null find($id, $lockMode = null, $lockVersion = null)
 * @method Car|null findOneBy(array $criteria, array $orderBy = null)
 * @method Car[]    findAll()
 * @method Car[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CarRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Car::class);
    }

    /**
     * @param $id
     * @param $rent
     * @return Car Retourne tous les véhicules du renter $username
     * @throws NonUniqueResultException
     */
    public function findByIDAndCurrent($id, $rent)
    {
        return $this->createQueryBuilder('car')
            ->leftJoin('App\Entity\Rent','rent', Expr\Join::WITH, 'car.id = rent.car')
            ->andWhere('car.renter = :renter AND car.id = :id')
            ->setParameter('renter', $rent)
            ->setParameter('id', $id)
            ->andWhere('car.isArchived <> 1')
            ->groupBy('car')
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult()
            ;
    }

    /**
     * @param $id
     * @return Car Retourne tous les véhicules du renter $username
     * @throws NonUniqueResultException
     */
    public function isRented($id)
    {
        return $this->createQueryBuilder('car')
            ->leftJoin('App\Entity\Rent','rent', Expr\Join::WITH, 'car.id = rent.car')
            ->andWhere('car.id = :id')
            ->setParameter('id', $id)
            ->select('IFELSE(rent.isMonthlyRecurring = 1 AND rent.startDate <= :now 
            OR rent.startDate <= :now AND rent.endDate >= :now
                ,1
                ,0
            ) as isRented')
            ->setParameter('now', date_create("now"))
            ->andWhere('car.isArchived <> 1')
            ->groupBy('car')
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult()
            ;
    }

    public function findOwnedBy(UserInterface $renter)
    {
        return $this->createQueryBuilder('car')
            ->leftJoin('App\Entity\Rent','rent', Expr\Join::WITH, 'car.id = rent.car')
            ->andWhere('car.renter = :renter')
            ->setParameter('renter', $renter)
            ->select('car as getCar,
            IFELSE(rent.isMonthlyRecurring = 1 AND rent.startDate <= :now OR rent.startDate <= :now AND rent.endDate >= :now
                ,1
                ,0
            ) as isRented')
            ->setParameter('now', date_create("now"))
            ->andWhere('car.isArchived <> 1')
            ->groupBy('car')
            ->getQuery()
            ->getResult()
            ;
    }

    /**
     * @param CarType $type
     * @return Car[] Retourne les véhicules d'un type donné available pour une réservation sans date
     */
    public function findAllAvailableByType(CarType $type)
    {
        $qb = $this->createQueryBuilder('car')
            ->leftJoin('App\Entity\Rent', 'rent', Expr\Join::WITH, 'car.id = rent.car')
            ->andWhere('car.type = :type')
            ->setParameter('type', $type)
            ->andWhere('rent is NULL OR rent.endDate < :now')
            ->setParameter('now', date_create("now"))
            ->andWhere('car.isArchived <> 1');

        return $qb
            ->getQuery()
            ->getArrayResult();
    }

    /**
     * @param $date
     * @param CarType $type
     * @return Car[] Retourne les véhicules d'un type donné available pour une réservation sans fin à une date
     */
    public function findAllAvailableByTypeAt($date, CarType $type)
    {
        $qb = $this->createQueryBuilder('car')
            ->leftJoin('App\Entity\Rent', 'rent', Expr\Join::WITH, 'car.id = rent.car')
            ->andWhere('car.type = :type')
            ->setParameter('type', $type)
            ->andWhere('rent is NULL OR rent.endDate < :date')
            ->setParameter('date', $date)
            ->andWhere('car.isArchived <> 1')
            ->andWhere('car.available = 1');

        return $qb
            ->getQuery()
            ->getResult();
    }

    /**
     * @param CarType $type
     * @param $startDate
     * @param $endDate
     * @return Car[] Retourne les véhicules d'un type donné available pour une réservation entre les dates précisées
     */
    public function findAllAvailableByTypeBetween(CarType $type)
    {
        $qb = $this->createQueryBuilder('car')
            ->andWhere('car.type = :type')
            ->setParameter('type', $type)
            ->leftJoin('App\Entity\Rent', 'rent', Expr\Join::WITH, 'car.id = rent.car')
            ->andWhere('car.isArchived <> 1')
            ->andWhere('car.available = 1');

        return $qb
            ->getQuery()
            ->getResult();
    }

    /**
     * @param CarType $type
     * @param $startDate
     * @param $endDate
     * @return Car[] Retourne les véhicules d'un type donné available pour une réservation entre les dates précisées
     */
    public function countRents(CarType $type)
    {
        $qb = $this->createQueryBuilder('car')
            ->andWhere('car.type = :type')
            ->setParameter('type', $type)
            ->leftJoin('App\Entity\Rent', 'rent', Expr\Join::WITH, 'car.id = rent.car')
            ->addSelect('COUNT(rent)')
            ->andWhere('car.isArchived <> 1')
            ->andWhere('car.available = 1');

        return $qb
            ->getQuery()
            ->getResult();
    }

}
