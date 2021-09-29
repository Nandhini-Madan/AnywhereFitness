import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Switch, Route ,Link} from "react-router-dom";
import Login from "./components/Login";
import Home from './components/Home';
import SignUp from './components/SignUp';
import Instructor from "./components/Instructor";
import PrivateRoute from './components/PrivateRoute';
import ClientPage from './components/ClientPage';
import Clientsessions from './components/ClientSessions';
import EditSession from './components/EditSessions';
import CreateClass from './components/CreateClass';
import EditClass from './components/EditClass';
import SearchClass from './components/SearchClass';
import {  useEffect, useState } from 'react';
import { useHistory } from 'react-router';
//import NavHeader from "./components/NavHeader";
import { Button, Form, FormControl } from 'react-bootstrap';


function App() {

  const [loggedIn,setLoggedIn] = useState(localStorage.getItem("token"))

  
  let history=useHistory()
  useEffect(()=>{
    setLoggedIn(loggedIn)
  },[loggedIn])
  const handleLogout = () => {
    const user = localStorage.clear()
   setLoggedIn(user)
    console.log("token logout", loggedIn)
   // window.location.reload()
    history.push("/")
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">

        <Navbar.Brand href="#">Anywhere Fitness</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"

            navbarScroll
          >
            {
              // console.log("token still", loggedIn)
             loggedIn?
                <>
                {console.log("token still",loggedIn)}
                 <Link to="/" className="nav-link" aria-current="page">Home</Link>
                   <Nav.Item>
                    <Nav.Link onClick={handleLogout}>logout</Nav.Link>
                  </Nav.Item>
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="mr-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </>
                :
                <>
                {console.log("token still", loggedIn)}
                  <Link to="/" className="nav-link" aria-current="page">Home</Link>
                  <Link to="/login" className="nav-link" aria-current="page">Login</Link>
                  <Link to="/signUp" className="nav-link" aria-current="page">SignUp</Link>
                </>
            }
          </Nav>


        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={<Login setLoggedIn={setLoggedIn} />}/>
        <Route exact path="/signUp" component={SignUp} />
        <PrivateRoute exact path="/Client" component={ClientPage} />
        <PrivateRoute exact path="/Instructor" component={Instructor} />
        <PrivateRoute exact path="/Clientsessions" component={Clientsessions} />
        <PrivateRoute exact path="/Editsessions/:id" component={EditSession} />
        <PrivateRoute exact path="/CreateClass" component={CreateClass} />
        <PrivateRoute exact path="/EditClass/:id" component={EditClass} />
        <PrivateRoute exact path="/SearchClass" component={SearchClass} />



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