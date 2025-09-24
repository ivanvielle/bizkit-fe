import { createContext, useState, useEffect } from "react";

// api
import { getMe } from "../api/authApi";

// context
const AuthContext = createContext(null);

// initial states
const getInitialUser = () => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
};

// provider
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(getInitialUser);
    const [loading, setLoading] = useState(false);

    const saveUser = userData => {
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const removeUser = async () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    const refreshUser = async () => {
        try {
            const res = await getMe();
            if (res?.data?.data) {
                saveUser(res.data.data);
            } else {
                removeUser();
            }
        } catch {
            removeUser();
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        refreshUser();
    }, []);

    return (
        <AuthContext.Provider value={{ loading, user, saveUser, removeUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
