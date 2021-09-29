import React from "react";
import { Button, Form, FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { useHistory } from 'react-router';

const NavHeader=(props)=>{
  let history =useHistory()

  const handleLogout = () => {
    const user = localStorage.clear()
    // setLoginState(false);
    console.log("token logout", user)
   // window.location.reload()
    history.push("/")
  }

    return(
        <>
        
        {
              // console.log("token still", loggedIn)
             props.loggedIn?
                <>
                {console.log("token still", props.loggedIn)}
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
                {console.log("token still", props)}
                  <Link to="/" className="nav-link" aria-current="page">Home</Link>
                  <Link to="/login" className="nav-link" aria-current="page">Login</Link>
                  <Link to="/signUp" className="nav-link" aria-current="page">SignUp</Link>
                 

                 
                </>
            }
        </>
    )
}
export default NavHeader;