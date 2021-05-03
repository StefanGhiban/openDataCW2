import Nav from "react-bootstrap/Nav";

const Navbar = () => {
    return(
        <Nav className="justify-content-center"  variant="tabs"  defaultActiveKey="/home">
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
