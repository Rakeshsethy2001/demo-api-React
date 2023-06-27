// import React from 'react'
import * as yep from "yup"
export const SignupG = yep.object({
    name: yep.string().trim().required("Name Required"),
    email: yep.string().trim().required("Email Required"),
    mobileNo: yep.string().trim().required("Mobile-no Required"),
    password: yep.string().trim().required("Password Required")
}) 