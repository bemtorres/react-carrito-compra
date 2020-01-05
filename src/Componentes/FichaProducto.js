import React from 'react';
import {Modal,ModalHeader,ModalBody,ModalFooter,Button,Container,CardImg} from 'reactstrap';
import './FichaProducto.css';
import {listaCarrito} from '../listaCarrito.json';

class FichaProducto extends React.Component{
    constructor(props){
        super();
        this.state = {
            Modal:false,
            listaCarrito,
            stock:props.props.stock
        };
        this.toggle = this.toggle.bind(this);
        this.agregarCarrito = this.agregarCarrito.bind(this);
        // console.log(props.props);
        // this.props.props.stock;
    }

    toggle(){
        // console.log(this.props);
        

        this.setState(prevState=>({
            modal: !prevState.modal
        }))
    }

    agregarCarrito(){

        // console.log(this.props);
        this.setState({
            stock: this.state.stock - 1
        })
        
        listaCarrito.push({
            "titulo" : this.props.props.titulo,
            "precio": this.props.props.precio
        });
        this.setState(prevState =>({
            modal : !prevState.modal
        }));


    }

    
    

    render(){       

        return(
            <Container>
                <Button onClick={this.toggle}>Ver ficha</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader> {this.props.props.titulo} </ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.imagen} />
                        <p>El detalle del producto seleccionado es el siguiente:</p>
                        {this.props.props.detalle}
                        <p>El valor es de ${this.props.props.precio}.-</p>
                        {/* <p>Hay <b>{this.props.props.stock}</b></p> */}
                        <p>Hay <b>{this.state.stock}</b> unidades de este producto disponible.</p>
                    </ModalBody>
                    <ModalFooter className="modalFooter">
                        <Button color="primary" onClick={this.agregarCarrito}>Agregar al Carrito</Button>
                        <Button color="danger" onClick={this.toggle}>Volver atrás</Button>
                    </ModalFooter>
                </Modal>
            </Container>
            
        );
    }
}

export default FichaProducto;