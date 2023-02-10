import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { loginRoute } from "../utils/APIroutes";





function Login() {
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
        email: "",
        password: "",
    })

    const handSubmit = async (event) => {
        event.preventDefault()

        if (handleValidation()) {
            const { password, email } = values

            const { data } = await axios.post(loginRoute, {
                password, email
            })
            if (data.status === false) toast.error("err login")
            else {
                localStorage.setItem("chat-app-user", JSON.stringify(data.user))

                navigate("/")
            }
        }
    }

    const handleValidation = () => {
        const { password, email } = values
        if (!password || !email) {
            toast.info("Mising infor")
        }



        return true
    }
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })

    }

    return (<>
        <div className="Container">
            <div className="brand">
                <img src={logo} alt="" />
                <h1>ZillChat</h1>

            </div>
            <form onSubmit={(e) => handSubmit(e)}>

                <input type="email" placeholder="email" name="email" onChange={(e) => handleChange(e)} />
                <input type="password" placeholder="password" name="password" onChange={(e) => handleChange(e)} />
                <button type="submit" >Login</button>

                <span>Register ? <Link to="/register">regiser</Link></span>



            </form>
            <ToastContainer />
        </div>








    </>
    )
}

export default Login