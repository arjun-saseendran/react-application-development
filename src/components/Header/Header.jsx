import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useRef } from "react";
import "./Header.css";
import { searchValue } from "../../features/searchProductSlice";
import { useDispatch } from "react-redux";

function Header() {
  const inputValue = useRef();
  const dispatch = useDispatch();

  return (
    <Navbar expand="lg" className="header">
      <Container fluid>
        <Navbar.Brand href="#" className="text-white">
          ShopKart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to={"/"} className="nav-link text-white">
              Home
            </Link>
            <Link to={"/account"} className="nav-link text-white">
              Account
            </Link>
            <Link to={"/cart"} className="nav-link text-white">
              Cart
            </Link>
            <Link to={"/orders"} className="nav-link text-white">
              Orders
            </Link>
            <Link to={"/settings"} className="nav-link text-white">
              Settings
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 serach-bar"
              aria-label="Search"
              ref={inputValue}
            />
            <Button
              variant="outline-light"
              onClick={() => dispatch(searchValue(inputValue.current.value))}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
