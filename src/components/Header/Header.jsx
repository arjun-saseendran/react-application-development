import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import "./Header.css";
import { searchValue } from "../../features/searchSlice";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const inputValue = useRef();
  const dispatch = useDispatch();
  const count =  useSelector(state => state.cartProducts.cartCount)
  const navigate = useNavigate()
  const handleRedirect = () => navigate('/cart')

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
              Cart <span className="badge bg-dark rounded-pill">{count}</span>
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
