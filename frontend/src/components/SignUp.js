import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { Row,Col,Button } from "react-bootstrap";
import * as yup from "yup";
import {useHistory} from "react-router-dom";

const SignUp = () => {
    ////The history.push () function belongs to react-router-dom and used to move from the current page to another one
    const history =useHistory();

    //Default state of page when the page gets loaded
    const defaultState={
        first_name:"",
        last_name:"",
        email:"",
        username:"",
        password:"",
        role:1,
        terms:false

    }
// Validation Form
const formSchema=yup.object().shape({
    role:yup.string().notRequired(),
    first_name:yup.string().required("Please Enter Your First Name").min(2,"This is not your first name"),
    last_name:yup.string().required("Please Enter Your Last Name").min(2,"This is not your last name"),
    username:yup.string().required("Please Enter your Username").min(2,"This is not your Username"),
    password:yup.string().required("Please Enter the password").matches( /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,"Password must contain at least 8 characters , one uppercase , one lowercase , one number and one special case character"),
    term: yup.boolean().oneOf([true],'Please accept our terms')
})
    const [formState,setFormState]=useState(defaultState);
    const [Error,setError]=useState({...defaultState,terms:""});
    //const 
    useEffect(()=>{

    },[])
    //submit form function
    const submitForm=event=>{
        event.preventDefault();
        console.log("Data signup form",formState);
        axios.post("https://anywherefitbe.herokuapp.com/api/auth/register",formState,{withCreditials:true})
            .then(res=>{
                //After posting the data what kind of response we are getting 
                console.log(res)
            })
            .catch(err=>{
                console.log("Invalid register",err)
            })

    }

    return (
        <>
            <Form onSubmit={submitForm}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        First Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control  placeholder="First Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Last Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control  placeholder="Last Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        User Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control  placeholder="User Name" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label as="legend" column sm={2}>
                            Select
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="Student"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            />
                            <Form.Check
                                type="radio"
                                label="Instructor"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                           
                        </Col>
                    </Form.Group>
                </fieldset>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Form.Check label="Terms and Conditions" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Sign in</Button>
                    </Col>
                </Form.Group>
            </Form>
        </>
    )
}

export default SignUp;