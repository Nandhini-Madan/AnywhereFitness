import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Card, Button, Row, Col } from "react-bootstrap";
import fitness from "../asserts/fitness1.jpg"
import { useHistory } from "react-router-dom";

const Instructor = () => {
    let history=useHistory()
    const defaultState = {
        subject: "",
        first_name: "",
        location: "",
        start_time: ""

    }
    const [allclass, setAllClass] = useState([])
   // const [message, SetMessage] = useState(defaultState)

    useEffect(() => {
        axiosWithAuth().get("http://localhost:5000/api/instructor/classes")
            .then(res => {
                console.log(res.data, "classes")
                setAllClass(res.data.data)
                // SetMessage(res.data.jwt)
            })
            .catch(
                err => {
                    console.log("error", err)
                }
            )

    }, [])

    const newClass=()=>{
        
        history.push("/CreateClass")

    }
    return (

        <>
            <h1>Welcome to classes: </h1>
            <br></br>
           
            <Row xs={1} md={2} className="g-4">
                {

                    allclass.map((clientClass => (
                        <Col>

                            <Card>
                                <Card.Img variant="top" src={fitness} />
                                <Card.Body>
                                    <Card.Title>Name:{clientClass.name}</Card.Title>
                                    <Card.Text>
                                        Location:{clientClass.location}
                                    </Card.Text>
                                    <Card.Text>
                                        Start Time: {clientClass.start_time}
                                    </Card.Text>

                                    <Button variant="primary" >Edit</Button>
                                    <Button variant="danger">Delete</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )))}





            </Row>
            <Button onClick={newClass}> Create Class </Button>
        </>
    )
}
export default Instructor;