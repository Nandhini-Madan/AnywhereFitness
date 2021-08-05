import React, { useEffect, useState } from "react";
import axios from "axios";
const Classes=()=>{
    const[allclass,setAllClass]=useState([])
    
    useEffect(()=>{
        axios.get('')
        .then(res=>{
            console.log(res,"classes")
            setAllClass(res.data)
        })
        .catch(
            err=>{
                console.log("error",err)
            }
        )

    },[])
    return(
        
        <>
      
        </>
    )
}
export default Classes;