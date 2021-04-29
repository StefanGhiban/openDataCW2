import Nav from "react-bootstrap/Nav";

const Navbar = () => {
    return(
        <Nav className="justify-content-center">
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/page1">Page2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/page2">Page2</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navbar;
