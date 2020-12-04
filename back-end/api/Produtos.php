<?php
require_once ("./conexaoFuncao.php");

$result = query ("SELECT * FROM produtos");
$produtos = [];

while ($rows = mysqli_fetch_assoc($result)){
    $produtos[] = $rows;
}

header ("Access-Control-Allow-Origin:*");

echo json_encode ($produtos);


?>