<?php

namespace App\Controller;

use App\Utils\Tool;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class VoucherController extends AbstractController
{
    private Tool $tools;

    public function __construct(Tool $tools)
    {
        $this->tools = $tools;
    }

    #[Route('/vouchers/generate-code', name: 'app_voucher_generate_code')]
    public function index(): Response
    {
        return $this->json([
            'name' => $this->tools->getRandomName()
        ]);
    }
}
