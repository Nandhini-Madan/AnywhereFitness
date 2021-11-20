import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Card, Button, Row, Col } from "react-bootstrap";
import fitness from "../asserts/fitness1.jpg"
import { useHistory } from "react-router-dom";



const ClientPage = () => {
  let history = useHistory();
  const defaultState = {
    subject: "",
    first_name: "",
    location: "",
    start_time: "",
    role: ""
  }
  const [allclass, setAllClass] = useState([])
  const [message, SetMessage] = useState(defaultState)

  const viewClass = (id) => {
    console.log("e0", id)
    const classes_id = id
    console.log(classes_id, "classses id")
    axiosWithAuth().post("https://anywherefitness21.herokuapp.com/api/client/classes/sessions", { classes_id })
      .then(res => {
        if (res) {
          console.log("Succesffully added")
        }

      })
      .catch(err => {
        console.log("error adding class", err)

      })
  }
  const MySessions = () => {
    history.push("/Clientsessions")
  }

  useEffect(() => {
    axiosWithAuth().get('https://anywherefitness21.herokuapp.com/api/client/classes')
      .then(res => {
        console.log(res.data, "classes")
        setAllClass(res.data.data)
        SetMessage(res.data.jwt)
      })
      .catch(
        err => {
          console.log("error", err)
        }
      )

  }, [])


  return (
    <>
      <div className="ClientName">
      <h4>Hi {message.first_name}</h4>
      </div>
      
      <div className="clientHeading">Available Classes</div>
      <br></br>
      <div className="classList">
        <Row xs={1} md={2} className="g-4 " >
          {allclass.map(((clientClass) => (
            <Col key={clientClass.name} >

              <Card >
                <Card.Img variant="top" src={fitness} />
                <Card.Body>
                  <Card.Title>Name: {clientClass.name}</Card.Title>
                  <Card.Text>
                    Location: {clientClass.location}
                  </Card.Text>
                  <Card.Text>
                    Start Time: {clientClass.start_time}
                  </Card.Text>
                  <Button variant="primary" onClick={viewClass.bind(this, clientClass.id)}> Add</Button>

                </Card.Body>
              </Card>
            </Col>
          )))}
          <Button variant="primary" onClick={MySessions}> My Session</Button>
        </Row>
      </div>
    </>
  )
}
export default ClientPage;