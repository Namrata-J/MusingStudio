import axios from "axios";
import toast from 'react-hot-toast';
import { toastStyle } from "../utils/customToastTheme";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useContext, createContext } from "react";

const authContext = createContext({ isUserLoggedIn: false });

const AuthProvider = ({ children }) => {

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const [formData, setFormData] = useState({ userEmail: "", userPwd: "" });
    const [encodedData, setEncodedData] = useState("");
    const [signUpErrMsg, setSignUpErrMsg] = useState();
    const [logInErrMsg, setLogInErrMsg] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const signUpHandler = async (e) => {
        e.preventDefault();
        if (formData.userEmail !== "" && formData.userPwd !== "") {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.userEmail)) {
                if (formData.userPwd.length >= 6 && /[a-zA-Z]/.test(formData.userPwd) && /[0-9]/.test(formData.userPwd)) {
                    try {
                        const response = await axios.post(`/api/auth/signup`, {
                            email: formData.userEmail,
                            password: formData.userPwd
                        })
                        localStorage.setItem("token", response.data.encodedToken);
                        setEncodedData(response.data.encodedToken)
                        setIsUserLoggedIn(true)
                        navigate("/")
                        toast.success('Successfully loggedIn!!', toastStyle)
                        setFormData({ ...formData, userEmail: "", userPwd: "" })
                    } catch (error) {
                        toast.error("Server error", toastStyle)
                    }
                } else {
                    setSignUpErrMsg("Pwd should be alphanumeric and have atleast six characters")
                }
            } else {
                setSignUpErrMsg("Your email format isn't correct")
            }
        } else {
            setSignUpErrMsg("Please Fill Out All The Fields")
        }
    }

    const logInHandler = async (e) => {
        e.preventDefault();
        if (formData.userEmail !== "" && formData.userPwd !== "") {
            try {
                const response = await axios.post("/api/auth/login", {
                    email: formData.userEmail,
                    password: formData.userPwd
                })
                localStorage.setItem("token", response.data.encodedToken);
                setEncodedData(response.data.encodedToken)
                setIsUserLoggedIn(true)
                navigate("/")
                toast.success('Successfully loggedIn!', toastStyle)
                setFormData({ ...formData, userEmail: "", userPwd: "" })
            } catch (error) {
                setLogInErrMsg("Either email or pwd is incorrect")
                toast.error("Error occurred: try again!!", toastStyle)
            }
        } else {
            setLogInErrMsg("Please Fill Out All The Fields")
        }
    }

    const guestLogInHandler = async () => {
        try {
            const response = await axios.post("/api/auth/login", {
                email: "musingStudio@gmail.com",
                password: "musing@1245"
            })
            if (response) {
                setIsUserLoggedIn(true)
                setEncodedData(response.data.encodedToken)
                if (location.state !== null) {
                    navigate(location?.state?.from?.pathname, { replace: true })
                } else
                    navigate("/")
                toast.success('Successfully loggedIn!!', toastStyle)
            }
        } catch (error) {
            toast.error("Server error", toastStyle)
        }
    }

    return <authContext.Provider value={{
        isUserLoggedIn,
        setIsUserLoggedIn,
        formData,
        setFormData,
        signUpHandler,
        signUpErrMsg,
        setSignUpErrMsg,
        logInHandler,
        logInErrMsg,
        setLogInErrMsg,
        guestLogInHandler,
        encodedData,
        setEncodedData
    }}>
        {children}
    </authContext.Provider>
}

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };