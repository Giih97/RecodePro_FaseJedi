
 <?php 
  header ("Access-Control-Allow-Origin:*");
  
 require_once ("./conexaoFuncao.php");

 if($_SERVER['REQUEST_METHOD'] === 'GET'){

    $sql = "SELECT * FROM pedidos;";
    $resultado = query ($sql);
    $pedidos = [];

    while ($rows = mysqli_fetch_assoc($resultado)){
        $pedidos[]=$rows;
    }
    echo json_encode($pedidos);
   

}else if($_SERVER['REQUEST_METHOD'] === 'POST'){
    
    $nome_do_cliente = $_POST['nome_do_cliente'];
    $endereco = $_POST['endereco'];
    $telefone = $_POST['telefone'];
    $nome_do_prod = $_POST['nome_do_prod'];
    $valor_unit = floatval($_POST['valor_unit']);
    $quantidade = intval($_POST['quantidade']);
    $valor_total = floatval($_POST['valor_total']);
        
    $sql = "INSERT INTO pedidos (nome_do_cliente,endereco, telefone,nome_do_prod, valor_unit,quantidade,valor_total) 
    VALUES ('$nome_do_cliente','$endereco ','$telefone','$nome_do_prod',$valor_unit,$quantidade,$valor_total);";
    noquery($sql);
}

    ?>