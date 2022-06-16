import { Container, Row,Col } from "react-bootstrap";

const Footer = () => {
    return (
        <>
        <Container fluid className="bg-dark text-white text-center pt-2 pb-2">
  <Row>
    <Col><p><b>All rights reserved by &copy; Mohammed Ali's Food Truck</b></p></Col>
  </Row>
</Container>
        </>
    );
}

export default Footer;