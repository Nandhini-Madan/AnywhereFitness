import React, { useEffect, useState } from "react";
import axios from "axios";

const Classes=()=>{
    const defaultClientState={
        first_name:"",
        username:"",
        role:""
    }
    const[allclass,setAllClass]=useState([])
    const [clientData, SetClientData]=useState(defaultClientState)
   
    
    useEffect(()=>{
        axios.get('http://localhost:5000/api/client/classes')
        .then(res=>{
            console.log(res.data,"classes")
            setAllClass(res.data)
            SetClientData(res.jwt)
        })
        .catch(
            err=>{
                console.log("error",err)
            }
        )

    },[])
    return(
        
        <>
      <h1> Welcome :{clientData.first_name}</h1>
     
      <p>{allclass}</p>
        </>
    )
}
export default Classes;