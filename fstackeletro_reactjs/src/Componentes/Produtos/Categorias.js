import {ListGroup} from "react-bootstrap";
import Produto from '../Produtos/Produto';
import '../Produtos/script.js';
import './categorias.css';

export default function Categorias(props) {

    const exibirCategoria = (evento) => {
        const categoria = evento.target.id;
        let elementos = document.getElementsByClassName('CardP');
        for(var i=0; i<elementos.length; i++){

        if(categoria === elementos [i].id || categoria=== "todos"){
                elementos[i].style = "display:inline-flex";
            }
                else {
                    elementos[i].style = "display:none";   
            }
        }
    }


/*function exibirCategoria(categoria){


    let elementos=document.getElementsByClassName("categorias");
    console.log(elementos);
    for(var i=0; i<elementos.length; i++){
        console.log (elementos[i].id);
        if(categoria == elementos [i].id)
            elementos[i].style = "display:block";
        else
            elementos[i].style = "display:none";
    }
} */


/* para exibir todos produtos
    let exibirTodos =()=> {
    let elementos = document.getElementsByClassName ("categorias");
    for (var i=0; i<elementos.length; i++) {
    elementos[i].style = "display:block";
}
}*/


    return (

<>
    <div className="tituloP" >
        <h3 className="p-5 text-center"><b>Produtos</b></h3>
    </div>


    <div >
        <div className="tituloC2">
        <h4 >Categorias </h4> 
        </div>
         
    <div className="lista">
        <ListGroup >
            <ListGroup.Item action onClick={exibirCategoria} id="todos">Todos (12)</ListGroup.Item>
            <ListGroup.Item action onClick={exibirCategoria} id="geladeira">Geladeiras (3)</ListGroup.Item>
            <ListGroup.Item action onClick={exibirCategoria} id="fogao">Fogões (2)</ListGroup.Item>
            <ListGroup.Item action onClick={exibirCategoria} id="microondas">Microondas (3)</ListGroup.Item>
            <ListGroup.Item action onClick={exibirCategoria} id="Lavadora de Roupas">Lavadora (2)</ListGroup.Item>
            <ListGroup.Item action onClick={exibirCategoria} id="Lava_louca">Lava-Louças (2)</ListGroup.Item>
        </ListGroup>
        </div> 
     </div>

</>


    );
}