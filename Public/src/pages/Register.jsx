import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"



function Register() {

    const handSubmit = (event) => {
        event.preventDefaule()
        alert("form")
    }
    const handleChange = (event) => {

    }

    return (<>

        <from onSubmit={(event) => handSubmit(event)}>
            <div className="brand">
                <img src="" alt="" />
                <h1>Snappy</h1>
            </div>
            <input type="text" placeholder="Username" name="Username" onChange={(e) => handleChange(e)} />
            <input type="email" placeholder="email" name="email" onChange={(e) => handleChange(e)} />
            <input type="password" placeholder="password" name="password" onChange={(e) => handleChange(e)} />
            <input type="password" placeholder="ConfirmPassword" name="password" onChange={(e) => handleChange(e)} />
            <button type="submit">Creat User</button>
            <span>already have an account ? <Link to="./Login.jsx">login</Link></span>



        </from>



    </>
    )
}

export default Register