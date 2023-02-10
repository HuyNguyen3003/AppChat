import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import styled from "styled-components"
import { BiPowerOff } from "react-icons/bi"



function LogOut({ selecContacts }) {

    const navigate = useNavigate()
    const handleClick = async () => {
        localStorage.clear()
        navigate("/login")
    }



    return (
        <Button>
            <BiPowerOff
                onClick={() => handleClick()}
            />
        </Button>
    )

}

const Button = styled.button`
color: #e47fff;
background-color: transparent;
border: none;
font-size: 31px;




`





export default LogOut