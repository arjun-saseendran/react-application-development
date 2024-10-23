import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ViewProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container className="d-flex justify-content-center">
      <Row className="m-5">
        <Card
          style={{ background: "#b7e0ff", width: "400px" }}
          className="px-5"
        >
          <Card.Img
            variant="top"
            src={product.image}
            style={{ objectFit: "contain" }}
            className="p-5"
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>${product.price}</Card.Text>
            <Button variant="dark w-100">Buy now</Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default ViewProduct;
