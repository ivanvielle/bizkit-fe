import { useState, useEffect } from "react";

// context
import AuthContext from "../contexts/AuthContext";

// api
import { getMe } from "../api/authApi";

const getInitialUser = () => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
};

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(getInitialUser);

    const saveUser = userData => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const removeUser = async () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            removeUser();
        }
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, saveUser, removeUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
