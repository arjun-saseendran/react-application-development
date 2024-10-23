import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './ProductCard.css'
import { useSelector } from "react-redux";

function ProductCard() {
    const products = useSelector((state => state.products.products))
    console.log(products);
    
  return (
    <Card className="product-card">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outerline-dark" style={{ backgroundColor: "#0b192c", color: 'white', marginRight: '5px' }}>Add to cart</Button>
        <Button variant="outerline-dark" style={{ backgroundColor: "#0b192c", color: 'white' }}>View Product</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
