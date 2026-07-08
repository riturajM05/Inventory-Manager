import { useState,useEffect,createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const authContext = createContext()

const AuthContextProvider = (props) => {
    const navigate = useNavigate()
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [user,setUser] = useState('')
    const [token, setToken] = useState(localStorage.getItem('token') || '')

    const register = async (name, email, password) => {
        try {
            const res = await axios.post(backendUrl + "/user/register", { name, email, password });
            if (res.data.success) {
                localStorage.setItem('token', res.data.token);
                setToken(res.data.token);
                navigate('/');
            } else {
                console.error(res.data.message || 'Registration failed');
            }
        } catch (error) {
            console.error(error?.response?.data?.message || error.message);
        }
    };
    
    const login = async (email, password) => {
        try {
            const res = await axios.post(backendUrl + "/user/login", {email, password});
            if (res.data.success) {
                localStorage.setItem('token', res.data.token)
                setToken(res.data.token)
                navigate('/')
            }
        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }

    const logout = () => {
        localStorage.removeItem('token')
        setToken('')
        setUser('')
    }

    const value = {
        register, login, logout, token, setToken, backendUrl, navigate
    }
    return (
        <authContext.Provider value={value}>
            {props.children}
        </authContext.Provider>
    )
}

export default AuthContextProvider