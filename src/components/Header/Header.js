import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import WhiteLogo from "../../assets/logo-white.svg";
import './Header.css';

const Header = () => {
	return (

		<Navbar expand="lg" variant="dark">
			<Container fluid>
				<Navbar.Brand href="#">
					<img src={WhiteLogo} />
					<span className="separator">|</span>
					<span className="developers">Developers</span>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
				<Navbar.Offcanvas
					id={`offcanvasNavbar-expand-lg`}
					aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
					placement="end"
				>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
						</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							<NavDropdown
								title="Why Marvel?"
								id={`offcanvasNavbarDropdown-expand-lg`}
							>
								<NavDropdown.Item href="#">Action</NavDropdown.Item>
								<NavDropdown.Item href="#">
									Thrill
								</NavDropdown.Item>
								<NavDropdown.Item href="#">
									Suspense
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="#">Enterprise</Nav.Link>
							<Nav.Link href="#">Pricing</Nav.Link>
							<Nav.Link href="#">Sign in</Nav.Link>
              <Button variant="outline-dark" className="sign-up-button">Sign up free</Button>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
};

export default Header;
