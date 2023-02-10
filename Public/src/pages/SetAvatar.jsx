import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./SetAvatar.scss"
import { setAvatarRoute } from "../utils/APIroutes";
import { Buffer } from "buffer"
import l1 from "../assets/l1.png"
import n1 from "../assets/n1.png"
import x1 from "../assets/x1.png"
import axios from "axios";









function SetAvatar() {
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


    const [avatar, SetAvatar] = useState([])
    const [isLoading, SetisLoading] = useState(true)
    const [selectedavatar, Setselectedavatar] = useState(undefined)

    const SaveAvatar = async () => {
        if (selectedavatar === undefined) toast.error("pls Choose set avatar your profile")
        else {

            const user = await JSON.parse(localStorage.getItem("chat-app-user"))
            const data = await axios.post(`${setAvatarRoute}/${user._id}`, {
                isAvatar: true,
                avatarImg: avatar[selectedavatar].toString("base64")
            })

            if (!data.data.isSet) toast.error("Err set avatar")
            else {
                user.isAvatar = true
                user.avatarImg = data.data.avatar
                //  console.log(user)
                localStorage.setItem("chat-app-user", JSON.stringify(user))
                navigate("/")
            }
        }
    }

    useEffect(() => {
        if (!localStorage.getItem("chat-app-user")) {
            navigate("/login")
        }


    }, [])





    useEffect(() => {
        const data = []

        data.push(new Buffer(n1))
        data.push(new Buffer(x1))
        data.push(new Buffer(l1))




        SetAvatar(data)
        SetisLoading(true)



    }, [])


    return (<>
        <div className="Container">
            <div className="pickAvatar">
                <h1>Pick an avatar as your profile </h1>
            </div>
            <div className="Avatars">
                {avatar.map((item, index) => {
                    return (
                        <div key={index}
                            className={`avatar ${selectedavatar === index ? "selected" : ""}`}>
                            <img
                                src={`${item}`}
                                alt="avatar"
                                onClick={() => Setselectedavatar(index)}
                            />
                        </div>
                    )
                })}
            </div>
            <button className="submit-btn"
                onClick={() => SaveAvatar()}
            >Set avatar</button>
        </div>
        <ToastContainer />
    </>
    )
}

export default SetAvatar