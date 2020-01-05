import React from 'react';
// import logo from './logo.svg';
import Producto from './Componentes/Producto';
import Navegacion from './Componentes/Navegacion';
import {Container,Row} from 'reactstrap';

import './App.css';
import {listaProductos} from './listaProductos.json';

// console.log(listaProductos);
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      listaProductos
    };
  }
  render(){
    const arregloComponentes = this.state.listaProductos.map(
        (listaProductos, i ) => {
          console.log(i);
          return(
            <Producto
            key = {i}
            titulo={listaProductos.titulo}
            precio={listaProductos.precio}
            descripcion={listaProductos.descripcion}
            imagen={listaProductos.imagen}
            stock={listaProductos.stock}
            />
          );
        }
    );
    return (
      <Container>
        <Navegacion titulo="Tienda de Electrónica" />
        <Row>
            {arregloComponentes}         
        </Row>
      </Container>
     
    );
  }
  
}

export default App;
