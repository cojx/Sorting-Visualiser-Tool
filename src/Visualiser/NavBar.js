import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
    <div className="container-fluid" expand="true">
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Sorting Visualiser Tool</Navbar.Brand>
            </Container>
        </Navbar>
    </div>
    </>
  );
}

export default NavBar;