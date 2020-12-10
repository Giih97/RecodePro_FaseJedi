<?php

function query ($sql){
    $severname= "localhost";
    $username = "root";
    $password = ""; 
    $database = "fstackeletro";
    $conect = mysqli_connect($severname,$username,$password,$database);
    $conect->query("set names utf8");

    if(!$conect){
        die("a conexão falhou" .mysqli_connect_error());
    }
  
    mysqli_set_charset($conect,"utf-8");
    $result = mysqli_query($conect,$sql);
    mysqli_close($conect);
    return $result;

    }

    function noquery ($sql){
        $severname= "localhost";
        $username = "root";
        $password = ""; 
        $database = "fstackeletro";
        $conect = mysqli_connect($severname,$username,$password,$database);
        $conect->query("set names utf8");

        if(!$conect){
            die("a conexão falhou" .mysqli_connect_error());
        }
        mysqli_set_charset($conect,"utf-8");
        $result = mysqli_noquery($conect,$sql);
        mysqli_close($conect);
    }


?>