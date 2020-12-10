import { useEffect, useState } from 'react';
import { Form, Button, Container,Table} from "react-bootstrap";
import Pedido from './pedido';

export default function PagePedidos(props) {
    const[pedidos, setPedidos] = useState([]); // chamar funcao get

    useEffect(()=> {
        async function fethData(){
            const url = "http://localhost/lojafullstackeletro/back-end/api/Insert_pedidos.php";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setPedidos(resultado);
        }
        fethData();
    }, [])
    

const envioPedido = async(evento) => {
    evento.preventDefault(); // para não atualizar a pagina automaticamente
   
    const dados = new FormData(evento.target);
    await fetch("http://localhost/lojafullstackeletro/back-end/api/Insert_pedidos.php",{
        method: "POST",
        body: dados
    });
}

   return (

    <Container>
               <div>
                   <h3 id="titulo"> <b>Faça seu Pedido</b> </h3>
               </div>
               <Form onSubmit={envioPedido} className="col-xl-10 col-md-6 mx-auto">    
                   <Form.Group>
                   <Form.Label>Nome:</Form.Label>
                       <Form.Control   type="text" id="nome" name="nome_do_cliente" />
                   </Form.Group>
                   <Form.Group>
                       <Form.Label>Enderenço: </Form.Label>
                       <Form.Control type="text" id="endereco" name="endereco"/>
                   </Form.Group>
                   <Form.Group>
                       <Form.Label> Telefone: </Form.Label>
                       <Form.Control  type="text" id="telefone" name="telefone"/>
                   </Form.Group>
                   <Form.Group>
                       <Form.Label> Produto: </Form.Label>
                       <Form.Control  id="nome_do_prod" name="nome_do_prod" type="text" /> 
                   </Form.Group>
                   <Form.Group>
                       <Form.Label> Preço Unitário: </Form.Label>
                       <Form.Control type="number" id="valor"  name="valor_unit"/>
                   </Form.Group>
                   <Form.Group>
                       <Form.Label>Quantidade:</Form.Label>
                       <Form.Control type="number" id="quantidade"  name="quantidade"/>
                   </Form.Group>
                   <Form.Group>
                       <Form.Label> Preço Final:</Form.Label>
                       <Form.Control type="number" id="valor_total" name="valor_total"/>
                   </Form.Group>
                   <Button variant="primary" type="submit">
                       Cadastrar
                </Button>
               </Form>
       
            <Table>
                <tread>
                    <tr>
                        <th>id</th>
                        <th>nome</th>
                        <th>endereco</th>
                        <th>telefone</th>
                        <th>produto</th>
                        <th>valor</th>
                        <th>quantidade</th>
                        <th>total</th>
                    </tr>
                </tread>
                <tbody>
                {pedidos && pedidos.map (pedido => <Pedido key={pedido.id_pedido} id={pedido.id_pedido} nome_do_cliente={pedido.nome_do_cliente} endereco={pedido.endereco} 
                telefone={pedido.telefone} nome_do_prod={pedido.nome_do_prod} valor_unit={pedido.valor_unit} quantidade={pedido.quantidade} valor_total={pedido.valor_total} />)}
                </tbody>
            </Table>
    </Container>
    
   );
}
