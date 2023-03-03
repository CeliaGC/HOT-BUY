// import { doesNotThrow } from 'assert';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function HeaderHotBuy() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#HeaderHotBuy">
            <img alt="" src="../../src/assets/img/logo.png" width="30" height="30" margin="0" className="d-inline-block align-top"/>{' '}
            HOT BUY
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderHotBuy;

// index.css que es (es en main) y todo lo de dentro
// 