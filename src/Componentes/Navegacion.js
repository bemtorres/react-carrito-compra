import React from 'react';
import {Navbar,NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap';
import Carro from './Carro';

class Navegacion extends React.Component{
    render(){
        return(
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">{this.props.titulo}</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    {/* <NavItem>
                        <NavLink href="/">Acerca de</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">React</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">JavaScript</NavLink>
                    </NavItem> */}
                    <NavItem>
                        <Carro/>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Navegacion;