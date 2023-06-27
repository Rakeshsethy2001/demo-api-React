import React from 'react'
// import { useState } from 'react'
// import { json, useNavigate } from 'react-router-dom'
import { SignupG } from './Schema/Index'
<Schemma></Schemma>
import { Form, Formik, Field } from 'formik'
export const Signup = () => {
    const Initialvalue = {
        name: "",
        email: "",
        mobileNo: "",
        password: ""
    }
    // const values = (value =>
    //     console.log(value))
    // const[name,setName]=useState("")
    // const[email,setEmail]=useState("")
    // const[mobileNo,setMobileNo]=useState("")
    // const[password,setPassword]=useState("")
    // localStorage.setItem("email",JSON.stringify(email))
    // localStorage.setItem("password",JSON.stringify(password))
    // const handelSubmit=()=>{
    //     navigate("/Login",{state:{Name:name,Password:password}})
    // }
    // const navigate=useNavigate();
    return (
        <Formik initialValues={Initialvalue}
            initialTouched={{
                field: true,
            }}
            validationSchema={SignupG}
            enableReinitialize
            onSubmit={(val) => values(val)}
        // onSubmit={(values) => {
        //   if (drawerHead === "Add") {
        //     return handleAddCandidate(values);
        //   } else {
        //     return handleEditCandidate(values);
        //   }
        // }}
        >
            {({ errors, handleBlur, handleChange, touched, values }) => {
                console.log(values);
                return (
                    <div className="container m-5 p-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <h2>Sign Up</h2>
                                <Form>
                                    <div className="form-group">
                                        <label for="name">Name:</label>
                                        <Field type="text" className="form-control" id="name"
                                            name="name" placeholder="Enter your name" onChange={handleChange} onBlur={handleBlur} value={values?.name} ></Field>
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email:</label>
                                        <Field type="email" className="form-control" id="email" name="email" placeholder="Enter your email" onChange={handleChange} onBlur={handleBlur} value={values?.email} ></Field>
                                    </div>
                                    <div className="form-group">
                                        <label for="mob-no">Mobile No:</label>
                                        <Field type="num" className="form-control" id="mobileno"
                                            name="mobileNo" placeholder="Enter your mobile no" onChange={handleChange} onBlur={handleBlur} value={values?.mobileNo} ></Field>
                                    </div>
                                    <div className="form-group">
                                        <label for="password">Password:</label>
                                        <Field type="password" className="form-control" id="password" name="password" placeholder="Enter your password" onChange={handleChange} onBlur={handleBlur} value={values?.password} ></Field>
                                    </div>

                                    <button type="submit" className="btn btn-primary mt-2">Sign Up</button>
                                </Form>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Formik>


    )
}
