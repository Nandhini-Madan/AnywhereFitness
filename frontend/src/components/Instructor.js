import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Card, Button, Row, Col } from "react-bootstrap";
import fitness from "../asserts/fitness1.jpg"
import { useHistory } from "react-router-dom";

const Instructor = () => {
    let history = useHistory()
   /* const defaultState = {
        subject: "",
        first_name: "",
        location: "",
        start_time: "",
        id: ""

    }*/
    const [allclass, setAllClass] = useState([])
    // const [message, SetMessage] = useState(defaultState)
    const getClass=()=>{
        console.log("getclass")
        axiosWithAuth().get("https://anywherefitness21.herokuapp.com/api/instructor/classes")
        .then(res => {
            console.log(res, "classes")
            setAllClass(res.data.data)
            // SetMessage(res.data.jwt)
        })
        .catch(
            err => {
                console.log("error", err)
            }
        )

    }
    useEffect(() => { getClass()
    }, [])

    const newClass = () => {

        history.push("/CreateClass")

    }
    const editClass = (id) => {
        console.log("edit class", id)
        history.push(`/EditClass/${id}`)

    }
    const deleteClass=(id)=>{
        console.log("delete",id)
        axiosWithAuth().delete(`http://localhost:5000/api/instructor/classes/${id}`)
        .then(res=>{
            console.log("res")
           // history.push("/Instructor")
          // setAllClass(allclass)
          getClass()
        })
        .catch(err=>{
            console.log("error")
        })
    }
    return (

        <>
        <br></br>
            <h1>Welcome Instructor: </h1>
            <br></br>
            <Row xs={1} md={2} className="g-4">
                {
                    allclass.map((clientClass => (
                        <Col key={clientClass.id}>

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

                                    <Button variant="primary" onClick={editClass.bind(this, clientClass.id)}>Edit</Button>
                                    <Button variant="danger" onClick={deleteClass.bind(this,clientClass.id)}>Delete</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )))}
                    <Button onClick={newClass}> Create Class </Button>
            </Row>
        
        </>
    )
}
export default Instructor;