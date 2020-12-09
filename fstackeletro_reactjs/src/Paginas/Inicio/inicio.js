
import { Carousel, Container} from 'react-bootstrap';
import vectorEletros from  './vectorEletros.png';
import eletros from './eletros.png';




export default function Inicio(props) {
    return (

        <>
      <Container fluid>
      <Container>
          <h3 className="p-6 ml-0"><b>Seja Bem Vindo (a)!</b></h3>
          <p> Aqui em nossa loja, <em> programadores tem descontos</em> nos produtos para sua casa</p>
      </Container>


  <Carousel className="carousel slide col-2 mx-auto">
      <Carousel.Item >
          <img 
              className="d-block "
              src={vectorEletros}
               alt="First slide"
               className="imgEletro" />

      </Carousel.Item>

      <Carousel.Item>
          <img 
          className="d-block"
              src={eletros}
              alt="Second slide"
              className="imgEletro"/>
      </Carousel.Item>
</Carousel>

</Container>


</>


    );
}