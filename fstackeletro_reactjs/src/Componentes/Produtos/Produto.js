import Produtos from './Produtos';
import './Produto.css'
import {Card,Col} from "react-bootstrap";



export default function Produto(props) 
{

    return (
        <Col style={{display:"flex"}} id={props.categoria}>
        <div className="cardp">

       
        <Card style={{width: '10rem', height: '25rem'}}  >
            <Card.Img variant="top" style={{ width: '8rem' }} src={require(`./img/${props.imagem}`).default} alt="Imagem de Produtos" />
            <Card.Body>
            <Card.Title>{props.descricao}</Card.Title>
            <Card.Text > <p>R$<strike>{props.preco}</strike></p>
            <p style={{ color: 'red' }}>R$ {props.preco_venda}</p></Card.Text>
            </Card.Body>
        </Card>
        </div>
        </Col>
    


    );
}