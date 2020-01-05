import React from 'react';
import {Badge,Popover,PopoverHeader,Table,PopoverBody, Button} from 'reactstrap';
import {listaCarrito} from '../listaCarrito.json';

class Carro extends React.Component{

    constructor(){
        super();
        this.state={
            popoverOpen:false,
            listaCarrito
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState(prevState =>({
            popoverOpen: !prevState.popoverOpen
        }));
    }

  
    
    render(){
        
        const arregloCarrito = this.state.listaCarrito.map( (listaCarrito, i) =>{
          
            return (
                <tr>
                    <td>{( i+=1 )}</td>
                    <td>{listaCarrito.titulo}</td>
                    <td>{listaCarrito.precio}</td>                  
                </tr>                
            )
        });
        let total = this.state.listaCarrito.reduce((obj, producto) => {
                obj += (parseInt(producto.precio)*1000);
                return obj; 
            }, 0)
        return(
            <div>
                <Button id="Popover1" color="warning">
                    <span className="material-icons">shopping_cart</span>
                    <Badge color="secundary">{ arregloCarrito.length }</Badge>
                </Button>
                <Popover target="Popover1" placeholder="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle}>
                    <PopoverHeader>Carrito de Compras</PopoverHeader>
                    <PopoverBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Producto</th>
                                    <th>Precio $</th>
                                </tr>
                            </thead>
                            <tbody>
                                {arregloCarrito }
                            </tbody>  
                            <tfoot>
                                <tr>
                                    <td><b>Total:</b></td>
                                    <td></td>
                                    <td>{ total } CLP</td>
                                </tr>
                            </tfoot>                          
                        </Table>
                    </PopoverBody>            
                </Popover>
            </div>
        );
    }
}

export default Carro;