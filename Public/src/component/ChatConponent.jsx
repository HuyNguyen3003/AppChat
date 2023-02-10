import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import styled from "styled-components"





function ChatComponent({ selecContacts }) {





    return (<>


        <Container>
            <div className="chatHead">
                <div className="userName">{selecContacts ? selecContacts.username : ""}</div>
            </div>
            <div className="chatmes"></div>
            <div className="chatinput"></div>

        </Container>

    </>)





}

const Container = styled.div`

height: 80vh;
flex-direction: column;
justify-content: center;
gap: 1rem;
.userName{
    font-size: 2rem;
    padding: 1rem;
    justify-content: center;
    display: flex;
    

}
`








export default ChatComponent