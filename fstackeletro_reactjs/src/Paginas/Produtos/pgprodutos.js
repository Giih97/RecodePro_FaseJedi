
import Produtos from '../../Componentes/Produtos/Produtos';
import { Row,Col,Container} from 'react-bootstrap';
import Categorias from '../../Componentes/Produtos/Categorias';

export default function PageProdutos(props) {

    return (
       
        <>

       
      
            <Col lg={3} md={4}>
                <Categorias/>
            </Col>
           
            <Col lg={5} md={4} className="mx-auto" >
            <Produtos />
            </Col>
      
        </>
        
    );

}