<?php

require '../config.php';

header('Content-Type: application/json');

$arquivo = '/painel/dados.json';

$url = "https://api.github.com/repos/$usuario/$repositorio/contents/$arquivo";

$ch = curl_init($url);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer $token",
    "Accept: application/vnd.github+json",
    "User-Agent: painel-pessoal"
]);

$resposta = curl_exec($ch);

curl_close($ch);

echo $resposta;

/* 
$dados = json_decode(file_get_contents('php://input'), true);

$novoSaldo = $dados['saldo'];

echo json_encode([
    'sucesso' => true,
    'saldo' => $novoSaldo
]); */