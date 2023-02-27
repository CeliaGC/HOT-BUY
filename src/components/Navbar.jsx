import {NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavbarHotBuy() {
  return (
    <>
    <Navbar bg="light" >
      <Container>
        <Navbar.Brand href="#NavbarHotBuy"> <img alt="" src="../../src/assets/img/logo.png" width="30" height="30" className="d-inline-block align-top"/>{' '}
            HOT BUY</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink href="#uploadProduct">Subir producto</NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar producto"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
      </Container>
    </Navbar>
    </>
  );
}

export default NavbarHotBuy;