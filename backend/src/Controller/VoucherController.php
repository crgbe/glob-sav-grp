<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class VoucherController extends AbstractController
{
    #[Route('/vouchers', name: 'app_voucher')]
    public function index(): Response
    {
        return $this->json([
            'test-1' => "Value 1",
            'test-2' => "Value 2",
        ]);
    }
}
