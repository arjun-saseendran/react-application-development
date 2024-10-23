import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ProductCard.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductCard() {
  const [products, setProducts] = useState([]);
  let searchProduct = useSelector(
    (state) => state.searchProduct.searchProduct.price
  );
  searchProduct = parseInt(searchProduct);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, [products]);

  if (searchProduct && products) {
    const searchProducts = products.filter(
      (product) => product.price < searchProduct
    );
    return (
      <Container>
        <Row className="mt-5">
          {searchProducts.map((product) => (
            <Col xs={12} sm={6} md={4} xl={3} className="mb-4" key={product.id}>
              <Card className="product-card" style={{ background: "#b7e0ff" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{
                    height: "200px",
                    objectFit: "contain",
                    padding: "10px",
                  }}
                />
                <Card.Body>
                  <Card.Title style={{ maxHeight: "20px", overflow: "hidden" }}>
                    {product.title}
                  </Card.Title>
                  <Card.Text style={{ maxHeight: "78px", overflow: "hidden" }}>
                    {product.description}
                  </Card.Text>
                  <Card.Text style={{ maxHeight: "78px", overflow: "hidden" }}>
                    ${product.price}
                  </Card.Text>
                  <Button
                    variant="outline-dark m-1"
                    style={{
                      backgroundColor: "#0b192c",
                      color: "white",
                    }}
                  >
                    Add to cart
                  </Button>
                  <Link to={`/view-product/${product.id}`}>
                    <Button
                      variant="outline-dark m-1"
                      style={{ backgroundColor: "#0b192c", color: "white" }}
                    >
                      View Product
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  } else {
    return (
      <Container>
        <Row className="mt-5">
          {products.map((product) => (
            <Col xs={12} sm={6} md={4} xl={3} className="mb-4" key={product.id}>
              <Card className="product-card" style={{ background: "#b7e0ff" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{
                    height: "200px",
                    objectFit: "contain",
                    padding: "10px",
                  }}
                />
                <Card.Body>
                  <Card.Title style={{ maxHeight: "20px", overflow: "hidden" }}>
                    {product.title}
                  </Card.Title>
                  <Card.Text style={{ maxHeight: "78px", overflow: "hidden" }}>
                    {product.description}
                  </Card.Text>
                  <Card.Text style={{ maxHeight: "78px", overflow: "hidden" }}>
                    ${product.price}
                  </Card.Text>
                  <Button
                    variant="outline-dark m-1"
                    style={{
                      backgroundColor: "#0b192c",
                      color: "white",
                    }}
                  >
                    Add to cart
                  </Button>
                  <Link to={`/view-product/${product.id}`}>
                    <Button
                      variant="outline-dark m-1"
                      style={{ backgroundColor: "#0b192c", color: "white" }}
                    >
                      View Product
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default ProductCard;
