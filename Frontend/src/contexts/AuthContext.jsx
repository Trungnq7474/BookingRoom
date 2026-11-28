import { useState } from "react";
import { AuthContext } from "./AuthContext.js";
import { loginUser } from "../services/authsService.js";

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        try {
            const res = await loginUser({ email, password });

            if (res.data.user) {
                setUser(res.data.user);
            }

            return res.data;
        }
        catch (err) {
            console.log(err);
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
