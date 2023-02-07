import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Register.scss"
import axios from "axios"
import { registerRoute } from "../utils/APIroutes";





function Register() {
    <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />
    {/* Same as */ }
    <ToastContainer />

    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("chat-app-user")) {
            navigate("/")
        }
    }, [])


    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: ""
    })

    const handSubmit = async (event) => {
        event.preventDefault()

        if (handleValidation()) {
            const { password, username, confirmpassword, email } = values

            const { data } = await axios.post(registerRoute, {
                password, email, confirmpassword, username
            })
            if (data.status === false) toast.error("err creat user")
            else {
                localStorage.setItem("chat-app-user", JSON.stringify(data.user))
                navigate("/")
            }
        }
    }

    const handleValidation = () => {
        const { password, username, email, confirmpassword } = values

        if (password !== confirmpassword) {
            toast.error('Check password');
            return false
        } else if (username.length < 3) {
            toast.error('UserName should > 3');
            return false

        } else if (password.length < 3) {
            toast.error("Passowd should > 3 ")
            return false

        } else if (!password || !email || !username || !confirmpassword) {
            toast.error("Mising infor")
            return false

        }

        return true
    }
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })

    }

    return (<>

        <div className="brand">
            <img src={logo} alt="" />
            <h1>ZillChat</h1>

        </div>
        <form onSubmit={(e) => handSubmit(e)}>

            <input type="text" placeholder="Username" name="username" onChange={(e) => handleChange(e)} />
            <input type="email" placeholder="email" name="email" onChange={(e) => handleChange(e)} />
            <input type="password" placeholder="password" name="password" onChange={(e) => handleChange(e)} />
            <input type="password" placeholder="ConfirmPassword" name="confirmpassword" onChange={(e) => handleChange(e)} />
            <button type="submit" >Creat User</button>

            <span>already have an account ? <Link to="/login">login</Link></span>



        </form>
        <ToastContainer />






    </>
    )
}

export default Register