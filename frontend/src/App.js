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
        <Route exact path="/classes" component={Classes}/>
      </Switch>


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
