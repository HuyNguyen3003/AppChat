import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import styled from "styled-components"
import ChatInput from "./ChatInput";
import { sendMesRouter, getMesRouter } from "../utils/APIroutes"
import { v4 as uuidv4 } from "uuid"









function ChatComponent({ selecContacts, currentUser, socket }) {

    const [message, Setmessage] = useState([])
    const [arrivalMessage, setarrivalMessage] = useState(null)

    const scrollRef = useRef()

    useEffect(() => {
        if (selecContacts) {

            const getAllMes = async () => {
                const data = axios.post(getMesRouter, {
                    from: currentUser._id,
                    to: selecContacts._id
                })
                    .then(data => {
                        Setmessage(data.data)
                    })


            }
            getAllMes()
        }


    }, [selecContacts])

    const handleSendMsg = async (msg) => {
        await axios.post(sendMesRouter, {
            from: currentUser._id,
            to: selecContacts._id,
            message: msg
        })
        socket.current.emit("send-msg", {
            to: selecContacts._id,
            form: currentUser._id,
            message: msg

        })

        const msgs = [...message]
        msgs.push({ from: true, message: msg })
        Setmessage(msgs)
    }

    useEffect(() => {
        if (socket.current) {
            socket.current.on("msg-recieve", (msg) => {
                setarrivalMessage({ from: false, message: msg })
            })
        }
    }, [])

    useEffect(() => {
        arrivalMessage && Setmessage((prev) => [...prev, arrivalMessage])

    }, [arrivalMessage])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [message])







    return (<>



        <Container>
            <div className="chatHead">
                <div className="userName">{selecContacts ? selecContacts.username : ""}</div>
            </div>
            <div className="chatmes">
                {message &&
                    message.map((message) => {

                        return (
                            <div ref={scrollRef} key={uuidv4()}>
                                <div className={`message ${message.from ? "sended" : "recived"}`}>
                                    <div className="content">
                                        {message.message}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="chatinput">
                <ChatInput
                    handleSendMsg={handleSendMsg}
                />
            </div>

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
.chatmes{
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    max-height: 34vh;
    &::-webkit-scrollbar{
        width: 0.2rem;
        &-thumb{
            background-color: #ffffff39;
            width: 0.1rem;
            border-radius: 1rem;
        }
    }
}
.message{
    display: flex;
    align-items: center;
    .content{
        max-width: 40%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        margin-right: 0.5rem;


        
    }
     }

.sended {
    justify-content: flex-end;


    .content {
        background-color: #aaa;

    }
}

.recived {
    justify-content: flex-start;


    .content {
        background-color: #ff0000;

    }
}



`








export default ChatComponent