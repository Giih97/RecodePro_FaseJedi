<?php
header ("Access-Control-Allow-Origin:*");
header ("Access-Control-Allow-Methods: GET, POST, DELETE,HEAD,OPTIONS");
header ("Acess-Control-Allow-Headers: Content-Type");
header ("Content-type:aplication/json");
$dadosJson = file_get_contents('php://input');
$dados = json_decode ($dadosJson);

$lista = array("msg": "Funcionando");
echo json_decode($lista);
?>