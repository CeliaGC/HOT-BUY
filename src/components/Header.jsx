// import { doesNotThrow } from 'assert';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

function HeaderHotBuy() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#HeaderHotBuy">
            <img alt="" src="../../src/assets/img/logo.png" width="80" height="80" className="d-inline-block align-top"/>{' '}
            
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderHotBuy;

// index.css que es (es en main) y todo lo de dentro
// 