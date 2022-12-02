<?php

namespace App\DataFixtures;

use App\Entity\Voucher;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Utils\Tool;

class VoucherFixtures extends Fixture
{
    private Tool $tools;

    public function __construct(Tool $tools)
    {
        $this->tools = $tools;
    }

    public function load(ObjectManager $manager): void
    {
        $voucher1 = (new Voucher())
            ->setName($this->tools->getRandomName())
            ->setDiscount($this->tools->getRandomDiscount());
        ;

        $voucher2 = (new Voucher())
            ->setName($this->tools->getRandomName())
            ->setDiscount($this->tools->getRandomDiscount());
        ;

        $voucher3 = (new Voucher())
            ->setName($this->tools->getRandomName())
            ->setDiscount($this->tools->getRandomDiscount());
        ;

        $manager->persist($voucher1);
        $manager->persist($voucher2);
        $manager->persist($voucher3);

        $manager->flush();
    }
}
