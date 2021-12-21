import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Row, Col, Card, Button } from "react-bootstrap";
import fitness from "../asserts/fitness1.jpg"
import { useHistory } from "react-router-dom";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from "./PaymentForm";

///const stripePublishKey = process.env.REACT_APP_PUBLISHABLE_KEY
const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

const Clientsessions = () => {
    let history = useHistory()
    const [mySessions, setMySessions] = useState([])
    const getSessions = () => {
        axiosWithAuth().get("https://anywherefitness21.herokuapp.com/api/client/classes/sessions")
            .then(res => {
                console.log(res.data)
                setMySessions(res.data.classes)
            })
            .catch(err => {
                console.log("Errror displaying", err)
            })
    }

    useEffect(() => {
        getSessions()
    }, [])

    const deleteclass = (id) => {
        console.log("delete", id)
        const sessionID = id
        axiosWithAuth().delete(`https://anywherefitness21.herokuapp.com/api/client/classes/sessions/${sessionID}`)
            .then(res => {
                console.log("Successfully deleted", res)
                getSessions()
            })
            .catch(err => {
                console.log("Error", err)
            })
    }

    const backToClass = () => {
        history.push("/Client")
    }

    return (

        <>
            <h1>My sessions</h1>
            <br></br>
            <Row xs={1} md={2} className="g-4">
                {mySessions.map(((mySessions) => (
                    <Col key={mySessions.sessionID} >
                        <Card>
                            <Card.Img variant="top" src={fitness} />
                            <Card.Body>
                                <Card.Title>Name:{mySessions.name}</Card.Title>
                                <Card.Text>Type:{mySessions.type}</Card.Text>
                                <Card.Text>Intensity:{mySessions.intensity}</Card.Text>
                                <Card.Text>
                                    Location:{mySessions.location}
                                </Card.Text>
                                <Card.Text>
                                    Start Time: {mySessions.start_time}
                                </Card.Text>
                                <Card.Text>
                                    Start Time: 99
                                </Card.Text>

                                <Button variant="primary" className="danger" onClick={deleteclass.bind(this, mySessions.sessionID)}> Delete</Button>
                                <Button onClick={backToClass}>Back</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )))}
            </Row>


            <Elements stripe={stripePromise}>
                <PaymentForm />
            </Elements>
            <br></br>
        </>



    )

}

export default Clientsessions;