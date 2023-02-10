import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import styled from "styled-components"



function Welcome({ currentUser }) {




    return (<>

        <Container>
            <h1>Welcome, <span>{currentUser.username}</span></h1>
            <h3>pl select a chat to start Messsaging</h3>
        </Container>

    </>)





}

const Container = styled.div`


`








export default Welcome