<?php 

  
 require_once ("./conexaoFuncao.php");

 $result = query ("SELECT * FROM destaques JOIN produtos ON produtos.id = destaques.id_categoria");
$destaques = [];

while ($rows = mysqli_fetch_assoc($result)){
    $destaques[] = $rows;
}

header ("Access-Control-Allow-Origin:*");

echo json_encode ($destaques);

/*

    $sql = "SELECT * FROM destaques JOIN produtos ON produtos.id = destaques.id_categoria;";
    $resultado = query ($sql);
    $destaques = [];

    while ($rows = mysqli_fetch_assoc($resultado)){
        $destaques[]=$rows;
    }
    echo json_encode($destaques); */

    ?>
   