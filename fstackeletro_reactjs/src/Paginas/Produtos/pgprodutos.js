
import Produtos from '../../Componentes/Produtos/Produtos';
import { Row,Col,Container} from 'react-bootstrap';
import Categorias from '../../Componentes/Produtos/Categorias';

export default function PageProdutos(props) {

    return (

        <>
        <Row>
        <Col lg={3} md={4}>
                <Categorias/>
            </Col> 
            <Col lg={9} md={7}>
                <Produtos/>
            </Col> 
        </Row>
    


        
        </>
        
    );

}