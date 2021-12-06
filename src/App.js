import logo from './logo.svg';
import './App.css';
import {Form, Button, Navbar,Nav,Container} from 'react-bootstrap'; 
function App() {
  return (
    <div className= "APP" >
<Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

     <div className= "container" >
    <Form>

    <div className= "row">
    <div className= "col">  

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

    </div>
    <div className= "col">  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  </div>
  <div className= "col">  
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </div>
  </div>
</Form>
</div>
      <header className="App-header">
      <div className="imgagee"><img width="640" height="360" src="/jsx-html-to-dom-diagram.png" /></div>
     
      </header>
    <div className= "container">
  
    <h1>   VIRTUAL DOM  VS REAL DOM    </h1>
    
   

    
    <div className= "row">
    <div className= "col">   
    The V.DOM React maintains two Virtual DOMs at once, one contains the updated Virtual DOM and one which is just the pre-updated version.
    </div>
      <div className= "col">
      Now, it compares the pre-updated version with the updated Virtual DOM and figures out what exactly has changed in the DOM.
      </div>
      <div className= "col">
      This process is known as ‘diffing’. Once React finds out what exactly has changed, it only updates the affected objects on Real DOM
        </div>
    <div className= "col">
      This significantly improves its performance and it is the main reason why Virtual DOM is loved by developers everywhere.
      </div>
      </div>
    </div>
    </div>

  );
}

export default App;
