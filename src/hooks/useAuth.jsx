import { useContext } from "react";

// context
import AuthContext from "../contexts/AuthContext";

const useAuth = () => {
    const authContext = useContext(AuthContext);

    if (!authContext) throw new Error("AuthContext must be used inside AuthProvider");

    return authContext;
};

export default useAuth;
