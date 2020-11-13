<?php

namespace App\Repository;

use App\Entity\Rent;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Query\Expr;

/**
 * @method Rent|null find($id, $lockMode = null, $lockVersion = null)
 * @method Rent|null findOneBy(array $criteria, array $orderBy = null)
 * @method Rent[]    findAll()
 * @method Rent[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Rent::class);
    }

    /**
     * @param $id
     * @param $renter
     * @return Rent|null
     * @throws NonUniqueResultException
     */
    public function findOneOf($id, $renter)
    {
        return $this->createQueryBuilder('rent')
            ->innerJoin('App\Entity\Car','car', Expr\Join::WITH, 'car.id = rent.car')
            ->andWhere('rent.id = :id AND car.renter = :renter AND rent.finished = 0')
            ->setParameter('id', $id)
            ->setParameter('renter', $renter)
            ->getQuery()
            ->getOneOrNullResult()
            ;
    }

    public function findWithNbMoisAPayee($user)
    {
        return $this->createQueryBuilder('rent')
            ->innerJoin('App\Entity\Car','car', Expr\Join::WITH, 'car.id = rent.car')
            ->andWhere('rent.user = :user AND rent.finished = 0')
            ->select('rent as getRent, 
            IFELSE
            (rent.isMonthlyRecurring = 1,
                (DIV(DATEDIFF(CURRENT_DATE(),rent.startDate),30)+1) - rent.paidMonths
                ,IFELSE
                (rent.isPaid = 1,
                    0,
                    (DIV(DATEDIFF(CURRENT_DATE(),rent.startDate),30)
                    +IFELSE(DATEDIFF(rent.startDate,CURRENT_DATE()) > rent.duration,1,0)) - rent.paidMonths
                )
            ) as nbPaidMonths,
            DATEADD(rent.startDate, (DIV(DATEDIFF(rent.startDate,CURRENT_DATE()),30) + 1), \'MONTH\') as nextMonth')
            ->setParameter('user', $user)
            ->getQuery()
            ->getResult()
            ;
    }

    public function findRenter($renter)
    {
        return $this->createQueryBuilder('rent')
            ->innerJoin('App\Entity\Car','car', Expr\Join::WITH, 'car.id = rent.car')
            ->innerJoin('App\Entity\CarType','type', Expr\Join::WITH, 'type.id = car.type')
            ->innerJoin('App\Entity\User','user', Expr\Join::WITH, 'rent.user = user.id')
            ->andWhere('car.renter = :renter')
            ->setParameter('renter', $renter)
            ->orderBy('rent.startDate', 'DESC')
            ->Select('rent as getRent,
            IFELSE
            (rent.isMonthlyRecurring = 1 AND rent.startDate <= :now OR rent.startDate <= :now AND rent.endDate >= :now
                ,1
                ,0
            ) as ongoing,
            IFELSE(rent.isMonthlyRecurring = 1 AND rent.startDate > :now OR rent.startDate > :now AND rent.endDate > :now
                ,1
                ,0
            ) as notStarted')
            ->setParameter('now', date_create("now"))
            ->groupBy('rent')
            ->getQuery()
            ->getResult()
            ;
    }

    public function findOfUserOfRenter($user, $renter)
    {
        return $this->createQueryBuilder('rent')
            ->innerJoin('App\Entity\Car','car', Expr\Join::WITH, 'car.id = rent.car')
            ->innerJoin('App\Entity\CarType','type', Expr\Join::WITH, 'type.id = car.type')
            ->innerJoin('App\Entity\User','user', Expr\Join::WITH, 'rent.user = user.id')
            ->andWhere('car.renter = :renter AND rent.user = :user AND rent.finished = 0')
            ->setParameter('renter', $renter)
            ->setParameter('user', $user)
            ->orderBy('rent.startDate', 'DESC')
            ->Select('rent as getRent,
            IFELSE(rent.isMonthlyRecurring = 1 AND rent.startDate <= :now OR rent.startDate <= :now AND rent.endDate >= :now
                ,1
                ,0
            ) as ongoing')
            ->setParameter('now', date_create("now"))
            ->groupBy('rent')
            ->getQuery()
            ->getResult()
            ;
    }

    public function findOneWithBilling($user, $renter)
    {
        return $this->createQueryBuilder('rent')
            ->innerJoin('App\Entity\Car','car', Expr\Join::WITH, 'car.id = rent.car')
            ->innerJoin('App\Entity\CarType','type', Expr\Join::WITH, 'type.id = car.type')
            ->innerJoin('App\Entity\User','user', Expr\Join::WITH, 'rent.user = user.id')
            ->andWhere('car.renter = :renter AND rent.user = :user')
            ->setParameter('renter', $renter)
            ->setParameter('user', $user)
            ->orderBy('rent.startDate', 'DESC')
            ->select('rent as getRent,
            IFELSE(rent.isMonthlyRecurring = 1 AND rent.startDate <= CURRENT_DATE() 
            OR rent.startDate <= CURRENT_DATE() AND rent.endDate >= CURRENT_DATE(),1,0) as ongoing, 
            IFELSE
            (rent.isMonthlyRecurring = 1,
                IFELSE(rent.finished = 0,
                (
                    (
                        DIV(DATEDIFF(CURRENT_DATE(),rent.startDate),30)+1
                        - rent.paidMonths
                    )
                    * rent.price
                ),
                0)
                ,IFELSE
                (rent.isPaid = 1,
                    0,
                    IFELSE
                    (rent.duration >=30,
                        IFELSE
                        (DATEDIFF(rent.endDate,CURRENT_DATE()) >= 30,
                            (
                            DIV(DATEDIFF(CURRENT_DATE(),rent.startDate),30)
                            + IFELSE
                                (DATEDIFF(rent.startDate,CURRENT_DATE()) > rent.duration,
                                    1,
                                    0
                                )
                            - rent.paidMonths
                            )
                            * 30 * car.price * 0.9,
                            rent.price - (rent.paidMonths * (car.price * 30 * 0.9))
                        ),
                        rent.price
                    )
                )
            ) as toPay,
            IFELSE
            (rent.isMonthlyRecurring = 1,
                rent.price
                ,IFELSE
                (rent.duration >=30,
                    IFELSE
                    (DATEDIFF(rent.endDate,CURRENT_DATE()) >= 30,
                        car.price * 30 * 0.9,
                        rent.price - (rent.paidMonths * (car.price * 30 * 0.9))
                    ),
                    rent.price
                )
            ) as totalCurrentMonth')
            ->getQuery()
            ->getResult()
            ;
    }

    public function totalRevenus($renter){
        return $this->createQueryBuilder('l')
            ->innerJoin('App\Entity\Car','car', Expr\Join::WITH, 'car.id = l.car')
            ->andWhere('l.isMonthlyRecurring = 0 AND l.isPaid = 1 OR l.isMonthlyRecurring = 1')
            ->andWhere('car.renter = :renter')
            ->setParameter('renter', $renter)
            ->select('sum(l.price) as total')
            ->getQuery()
            ->getResult()
            ;
    }
}
