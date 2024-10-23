import Table from "react-bootstrap/Table";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
    const cartProducts = useSelector(state => state.cartProducts.cartProducts)
  return (
    <Container>
        <h1 className="text-white text-center m-5">Cart</h1>
      <Row className="vh-100 mt-5">
        <Table striped bordered>
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
