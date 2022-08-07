import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
const HeaderComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="/">Muhammad Nurwibawanto</Navbar.Brand>
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="#Biografi">
                        <Nav.Link>Biografi</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="#contact">
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                    <NavDropdown title="Materi" id="basic-nav-dropdown">
                        <LinkContainer to="/register">
                            <NavDropdown.Item>
                                Register
                            </NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/Counter">
                            <NavDropdown.Item >
                                Counter
                            </NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default HeaderComponent