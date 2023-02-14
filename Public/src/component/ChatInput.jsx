import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"
import { IoMdSend } from "react-icons/io"




function ChatInput({ handleSendMsg }) {

    const [mgs, setmgs] = useState("")

    const sendchat = async (event) => {
        event.preventDefault()
        if (mgs.length > 0) {
            handleSendMsg(mgs)
            setmgs(" ")

        }
    }








    return (<>


        <Container>

            <div className="button-container">

                <form className="input-container" onSubmit={(e) => sendchat(e)}>

                    <input className="input-mes" type="text" placeholder="tepe your message here"
                        value={mgs}
                        onChange={(e) => setmgs(e.target.value)}
                    />

                    <button className="submit"
                    ><IoMdSend /></button>




                </form>
            </div>
        </Container>

    </>)





}

const Container = styled.div`
position: relative;
top: 8.2rem;
.button-container{
width: 100vw;
display: flex;
align-items: center;
color: white;
}
.input-container{
    width: 58vw;
    height: 6vh;
   border-radius: 2rem;
   display: flex;
   align-items: center;
   gap: 2rem;
   background-color: aquamarine;
   input{
       width: 80%;
       background-color: transparent;
       border: none;
       padding-left: 1.2rem;
       &::selection{
           background-color: #9186f3;
       }
       &:focus{
           outline: none;
       }
   }
   button{
    position: relative;
    font-size: 1.3rem;
    color: #ffff00c8;
    cursor: pointer;
       padding: 0.3rem 2rem;
       border-radius: 2rem;
       display: flex;
       justify-content: center;
       background-color: #9a86f3;
       border: none;
  
   }
}

`








export default ChatInput