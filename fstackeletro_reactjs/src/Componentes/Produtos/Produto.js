import Produtos from './Produtos';
import './Produto.css'
import {Card} from "react-bootstrap";



export default function Produto(props) 
{

    return (

        <Card  className="CardP" style={{width: '10rem', height: '22rem'}} id={props.categoria}  >
            <Card.Img variant="top" style={{ width: '8rem' }} src={require(`./img/${props.imagem}`).default} alt="Imagem de Produtos" />
            <Card.Body>
            <Card.Title>{props.descricao}</Card.Title>
            <Card.Text > <p>R$<strike>{props.preco}</strike></p>
            <p style={{ color: 'red' }}>R$ {props.preco_venda}</p></Card.Text>
            </Card.Body>
        </Card>


    );
}