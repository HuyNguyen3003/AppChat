import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import styled from "styled-components"



function Contacts({ contacts, currentUser, handleChatChange }) {

    const [currentUserName, SetcurrentUserName] = useState([])
    const [currentUserIMG, SetcurrentUserIMG] = useState([])
    const [currentSelected, SetcurrentSelected] = useState(undefined)

    useEffect(() => {
        if (currentUser) {
            SetcurrentUserIMG(currentUser.avatarImg)
            SetcurrentUserName(currentUser.username)

        }
    }, [currentUser])

    const changeCurrentUser = (index, contact) => {
        SetcurrentSelected(index)
        handleChatChange(contact)
    }




    return (<>
        {currentUserName && currentUserIMG && (



            < Container >
                <div className="brand">
                    <img src={logo} alt="" />
                    <h1>ZillChat</h1>
                </div>
                <div className="contacts">
                    {contacts &&
                        contacts.map((item, index) => {
                            return (

                                <div className={`contact ${index === currentSelected ? "selected" : ""}`} key={index}
                                    onClick={() => changeCurrentUser(index, item)}
                                >
                                    <div className="userName">
                                        <h3>{item.username}</h3>
                                    </div>
                                </div>
                            )
                        })}
                </div>

                <div className="current-user">
                    <div className="avatar">

                        <div className="userName">
                            <h3>{currentUserName}</h3>
                        </div>
                    </div>
                </div>


            </Container>

        )
        }



    </>)





}

const Container = styled.div`
background-color: rgba(18, 20, 24, 0.261);
height: 85vh;
flex-direction: column;
justify-content: center;
gap: 1rem;




  
    
.brand{
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    margin: 2rem 0;
}
.contacts{
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    .contact{
       min-height: 5rem;
       width: 90%;
       &.selected{
        color:red
       }
       
    }
}
.current-user{
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 2rem;
    width: 90%;
}

`








export default Contacts