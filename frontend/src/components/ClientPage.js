import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Card ,Button, Row,Col} from "react-bootstrap";
import fitness from "../asserts/fitness1.jpg"

const ClientPage=()=>{
    const defaultState={
        subject:"",
        first_name:"",
        location:"",
        start_time:"",
        role:""

      
      
    }
    const[allclass,setAllClass]=useState([])
    const [message,SetMessage]=useState(defaultState)
    
    useEffect(()=>{
        axiosWithAuth().get('http://localhost:5000/api/client/classes')
        .then(res=>{
            console.log(res.data,"classes")
            setAllClass(res.data.data)
            SetMessage(res.data.jwt)
        })
        .catch(
            err=>{
                console.log("error",err)
            }
        )

    },[])

    const viewClass=(id)=>{
        console.log("e0",id)

   
    }
    return(
        
        <>
      <h1>Welcome to classes:{message.role} {message.first_name}</h1>
      <Row xs={1} md={2} className="g-4">
      {allclass.map(((clientClass,key)=>(
        <Col id={key} >
         
          <Card  >
          <Card.Img variant="top" src={fitness}  />
          <Card.Body>
            <Card.Title>Name:{clientClass.name}</Card.Title>
            <Card.Text>
              Location:{clientClass.location}
            </Card.Text>
            <Card.Text>
             Start Time: {clientClass.start_time}
            </Card.Text>
            <Button onClick={viewClass(clientClass.id)}> Test</Button>
            <Button variant="primary" >Edit</Button>
            <Button variant="danger">Delete</Button>
          </Card.Body>
        </Card>
        </Col>
      )))}
</Row>
        </>
    )
}
export default ClientPage;