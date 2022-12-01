<?php

namespace App\Utils;

class Tool
{
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