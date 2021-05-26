import Nav from "react-bootstrap/Nav";
import logoLogo from "../assets/logoLogo.png";

const Navbar = () => {
    return(
        <Nav className="bg-dark justify-content-center align-items-center" navbarScroll="true">
            <a className="navbar-brand" href="/">
                <img className="img-fluid" src={logoLogo} alt="logo" width="60"/>
            </a>
            <Nav.Item>
                <Nav.Link  className="text-white" href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link  className="text-white" href="/Unis">University Rankings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link  className="text-white" href="/Costs">Cost of Living Rankings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link  className="text-white" href="/Aggregated">Aggregated Rankings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link  className="text-white" href="/About">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link  className="text-white" href="/Contact">Contact</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navbar;
