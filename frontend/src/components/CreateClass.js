import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Input from "./Input";
import * as yup from "yup";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";


const CreateClass = () => {
    let history=useHistory()

    const defaultState = {
        name: "",
        type: "",
        start_time: "",
        duration: "",
        intensity: "",
        location: "",
        max_class: ""
    }

    const [formState, setFormState] = useState(defaultState)
    const [Error] = useState({ ...defaultState })
    const [disabledButton, setDisabledButton] = useState(true)

    const formSchema = yup.object().shape({
        name: yup.string().required("Enter the Name"),
        type: yup.string().required("Enter the Type"),
        start_time: yup.string().required("Enter the Start Time"),
        duration: yup.string().required("Enter Duration"),
        intensity: yup.string().required("Enter the intensity"),
        location: yup.string().required("Enter the Location"),
        max_class: yup.string().required("Enter max class in number")
    })

    useEffect(() => {
        formSchema.isValid(formState)
        .then(valid => setDisabledButton(!valid))
    }, [formState, formSchema])

    const inputchange = event => {
        console.log(event,"inputchange")
        setFormState({
            ...formState, [event.target.name]: event.target.value
        })
    }

    const submitForm = event => {
      //  event.preventDefault();
        console.log("create")
        axiosWithAuth().post("https://anywherefitness21.herokuapp.com/api/instructor/classes", formState)

            .then(res => {
                console.log("Result", res)
                history.push("/Instructor")
            })
            .catch(err => {
                console.log("error", err)
            })
    }
    const backToClass=()=>{
        history.push("/Instructor")
        
    }
    return (
        <>
            <h2>Create Class </h2>

            <Form onSubmit={submitForm}>
                <Input type="text" placeholder="Class Name" onChange={inputchange} value={formState.name} name="name" label="Name" errors={Error} />
                <Input type="text" placeholder="Type" onChange={inputchange} value={formState.type} name="type" label="Type" errors={Error} />
                <Input type="text" placeholder="Start Time" onChange={inputchange} value={formState.start_time} name="start_time" label="Start Time" errors={Error} />
                <Input type="text" placeholder="Duration" onChange={inputchange} value={formState.duration} name="duration" label="Duration" errors={Error} />
                <Input type="text" placeholder="Intensity" onChange={inputchange} value={formState.intensity} name="intensity" label="Intensity" errors={Error} />
                <Input type="text" placeholder="Location" onChange={inputchange} value={formState.location} name="location" label="Location" errors={Error} />
                <Input type="text" placeholder="Max Class" onChange={inputchange} value={formState.max_class} name="max_class" label="Max Class" errors={Error} />
                <Button disabled={disabledButton} onClick={submitForm} >submit</Button> 
                <Button  onClick={backToClass} >Classes</Button> 

            </Form>
        </>

    )
}
export default CreateClass;