import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"

function Navigationbar() {
  return (
    <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Brand href="/"><h2>BLOG APP</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="btn-md btn-round">Home</Nav.Link>
            <Nav.Link href="/aboutus" style={{marginLeft: '750px'}} className="btn-md btn-round">About US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;