import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import styled from "styled-components"
// import "./SetAvatar.scss"
import { allUserRouter } from "../utils/APIroutes";
import Contacts from "../component/Contacts"
import Welcome from "../component/Welcome";

function Chat() {

    const [contacts, setcontacts] = useState([])
    const [currentUser, setcurrentUser] = useState(undefined)
    const [selecContacts, setselecContacts] = useState(undefined)

    const navigate = useNavigate()

    const handleChatChange = (userChat) => {
        setselecContacts(userChat)
    }


    useEffect(() => {
        const getUser = async () => {
            setcurrentUser(await JSON.parse(localStorage.getItem("chat-app-user")))
        }
        if (localStorage.getItem("chat-app-user")) {
            getUser()

        } else {
            navigate("/login")
        }
    }, [])

    useEffect(() => {
        const getContacts = async () => {
            const data = await axios.get(`${allUserRouter}/${currentUser._id}`)
            await setcontacts(data.data)
        }

        if (currentUser) {
            if (currentUser.avatarImg) {
                getContacts()
            }
            else {

                navigate("/setAvatar")
            }
        }



    }, [currentUser])



    return (<>
        <Container>
            <div className="Container">
                <Contacts
                    contacts={contacts}
                    currentUser={currentUser}
                    handleChatChange={handleChatChange}
                />
                <Welcome
                    currentUser={currentUser}
                >

                </Welcome>
            </div>

        </Container>
    </>)
}


const Container = styled.div`
background-color: rgba(0, 254, 254, 0.261);
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
align-items: center;



.Container {
    height: 85vh;
     width: 85vw;
     background-color: rgb(118, 255, 250);
     display: grid;
     grid-template-columns: 25% 75% ;



}


`




export default Chat