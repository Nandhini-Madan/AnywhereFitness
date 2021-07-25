import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Form, FormControl } from 'react-bootstrap';
import { Link, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from './components/Home';
import SignUp from './components/SignUp';

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">

        <Navbar.Brand href="#">Anywhere Fitness</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <Link to="/" className="nav-link" aria-current="page">Home</Link>
            <Link to="/login" className="nav-link" aria-current="page">Login</Link>
            <Link to="/signUp" className="nav-link" aria-current="page">SignUp</Link>
            <Link to="/classes" className="nav-link" aria-current="page" >Classes</Link>
          </Nav>


          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signUp" component={SignUp} />
      </Switch>
=======
  <Navbar.Brand href="#">Anywhere Fitness</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Login</Nav.Link>
      
      <Nav.Link href="#" >
        classes
      </Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fitness1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fitness2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fitness3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      <br></br>
      <div class="container marketing">

        {// <!-- Three columns of text below the carousel -->
        }
        <div class="row">
          <div class="col-lg-4">
          <img src={fitness3} class="img-thumbnail" alt="..."/>

            <h2>Heading</h2>
            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            <p><a class="btn btn-secondary" href="..">View details »</a></p>
          </div>
          {//<!-- /.col-lg-4 -->
          }
          <div class="col-lg-4">
          <img src={fitness2} class="img-thumbnail" alt="..."/>

            <h2>Heading</h2>
            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            <p><a class="btn btn-secondary" href="..">View details »</a></p>
          </div>
          {//<!-- /.col-lg-4 -->
          }
          <div class="col-lg-4">
          <img src={fitness1} class="img-thumbnail" alt="..."/>

            <h2>Heading</h2>
            <p>And lastly this, the third column of representative placeholder content.</p>
            <p><a class="btn btn-secondary" href="..">View details »</a></p>
          </div>
          {//</div><!-- /.col-lg-4 -->
          }
        </div>
        {
          //<!-- /.row -->
        }

        {//<!-- START THE FEATURETTES -->
        }


        <hr class="featurette-divider"></hr>

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
            <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
          </div>
          <div class="col-md-5">
          <img src={fitness3} class="img-thumbnail" alt="..."/>



      <div className="Footer">
        <div>
          <p>&copy;{(new Date().getFullYear())} Nandhini Madan | All rights reserved | Terms Of Service | Privacy</p>
        </div>
        <div className="legal__links">
          <span>Made with <span className="heart">♥</span> Nandhini Madan</span>
        </div>

      </div>
    </div>

  );
}

export default App;
