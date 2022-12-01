<?php

namespace App\DataFixtures;

use App\Entity\Voucher;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class VoucherFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $voucher1 = (new Voucher())
            ->setName($this->getRandomName())
            ->setDiscount($this->getRandomDiscount());
        ;

        $voucher2 = (new Voucher())
            ->setName($this->getRandomName())
            ->setDiscount($this->getRandomDiscount());
        ;

        $voucher3 = (new Voucher())
            ->setName($this->getRandomName())
            ->setDiscount($this->getRandomDiscount());
        ;

        $manager->persist($voucher1);
        $manager->persist($voucher2);
        $manager->persist($voucher3);

        $manager->flush();
    }

    public function getRandomDiscount(array $values = [10, 20, 30, 40, 50, 60, 7, 80, 90]): int
    {
        $randIndex = array_rand($values);

        return $values[$randIndex];
    }

    public function getRandomName(int $length = 10): string
    {
        return bin2hex(random_bytes($length));
    }
}
