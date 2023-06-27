import React from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
export const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    // const uName = JSON.parse(localStorage.getItem("email"));
    // const pass = JSON.parse(localStorage.getItem('password'));
    const { state } = useLocation();
    console.log(state);

    const handelSubmit = () => {
        if (userName === state?.Name && password === state?.Password) {
            navigate("/Home", {state : {Name: userName}})
        }
        else {
            alert("invalid credential")
        }
    }
    const navigate = useNavigate();
    return (
        <div className="container m-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2>Login</h2>
                    <form>
                        <div className="form-group">
                            <label for="username">Username:</label>
                            <input type="text" className="form-control" id="username" placeholder="Enter username" onChange={(e) => setUserName(e.target.value)} value={userName} />
                        </div>
                        <div className="form-group">
                            <label for="password">Password:</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        </div>
                        <button type="submit" className="btn btn-primary mt-2" onClick={handelSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}