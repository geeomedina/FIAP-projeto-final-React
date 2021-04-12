import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import load from "../assets/loading.gif"

export const LoginContext = React.createContext();

export const LoginProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        auth.onAuthStateChanged((u) => {
            if(u) {
                setUser(u);
                localStorage.setItem('user', u.uid);
            } else {
                setUser(null);
                localStorage.removeItem('user');
            }
            setLoading(false)
        });
    }, []);

    if(loading) {
        return <img  src={load} width="250" alt="Loading" />
    }

    return (
        <LoginContext.Provider 
            value={{user}}
        >
            {children}
        </LoginContext.Provider>
    );
}
export default LoginProvider;