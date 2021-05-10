import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo.png";

const Navbar = () => {
    return(
        <Nav className="justify-content-center align-items-center"  variant="tabs">
            <a className="navbar-brand" href="/">
                <img className="img-fluid" src={logo} alt="logo" width="50"/>
            </a>
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/Unis">University Rankings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/Costs">Cost of Living Rankings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/Aggregated">Aggregated Rankings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/About">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navbar;
