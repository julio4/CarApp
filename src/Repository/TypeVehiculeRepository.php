<?php

namespace App\Repository;

use App\Entity\TypeVehicule;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

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
    public function findAllAvailable()
    {
        $qb = $this->createQueryBuilder('type');
//            ->innerJoin('tv.vehicules', 'prix')
//            ->addSelect('prix');

        return $qb
            ->getQuery()
            ->getArrayResult();
    }
}
