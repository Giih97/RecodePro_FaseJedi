import Produtos from './Produtos';
import './Produto.css'
<<<<<<< HEAD
import {Card} from "react-bootstrap";
=======
import {Card,Col} from "react-bootstrap";
>>>>>>> 6aa15cc24f1915cd08d8c14a91958e39edbbddef



export default function Produto(props) 
{

    return (
        <Col style={{display:"flex"}} id={props.categoria}>
        <div className="cardp">

<<<<<<< HEAD
        <Card  className="CardP" style={{width: '10rem', height: '22rem'}} id={props.categoria}  >
=======
       
        <Card style={{width: '10rem', height: '25rem'}}  >
>>>>>>> 6aa15cc24f1915cd08d8c14a91958e39edbbddef
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