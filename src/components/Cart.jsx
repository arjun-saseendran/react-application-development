import Table from "react-bootstrap/Table";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
    const cartProducts = useSelector(state => state.cartProducts.cartProducts)
  return (
    <Container>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Image</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts.map((product) => (
              <tr key={product.id}>
                <td></td>
                <td>{product.title}</td>
                <td>
                  <img src={product.image} height="50px" />
                </td>
                <td>{product.description}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}

export default Cart;
