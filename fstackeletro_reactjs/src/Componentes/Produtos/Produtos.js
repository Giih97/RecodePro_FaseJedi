import { useState, useEffect } from 'react';
import Produto from './Produto';
import {Card} from "react-bootstrap";



export default function Produtos(props) {
    const [produtos, setProdutos] = useState([]);

    useEffect(async() => {
        const resposta = await fetch ("http://localhost/lojafullstackeletro/back-end/api/Produtos.php")
        const dados = await resposta.json ()
        setProdutos(dados);
    }, []);


    return (
    <div> 
        <div>

             {produtos && produtos.map(item => <Produto key 
             = {item.id} categoria={item.categoria} imagem={item.imagem} descricao= 
             {item.descricao} preco={item.preco}
             preco_venda={item.preco_venda} />)} 
        
        </div> 
    </div> 
    )
}