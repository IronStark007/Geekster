import { Navbar, Nav, Form, FormControl, Container, Button } from 'react-bootstrap';

const Header = (props) => {
  
  const searchHandler = () => {
    return props.queryResult(props.text);
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Mohammed Ali Recipe Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search for recipe"
                className="me-2"
                aria-label="Search"
                onChange={e=>props.setText(e.target.value)}
              />
              <Button variant="outline-light" onClick={searchHandler}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );

}

export default Header;