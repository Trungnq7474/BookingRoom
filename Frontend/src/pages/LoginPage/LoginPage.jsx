import { useState, useContext } from "react";
import Login from "../../components/Login/Login.jsx";
import { AuthContext } from "../../contexts/AuthContext.js";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async () => {
        const res = await login(email, password);
        
        if (res?.user) {
            if (res.user.role === "Admin") {
                navigate("/admin");
            }
            else if (res.user.role === "Sinh Viên") {
                navigate("/student");
            }
            else if (res.user.role === "Giảng Viên") {
                navigate("/teacher");
            }
            else if (res.user.role === "Nhân Viên Kỹ Thuật") {
                navigate("/technician");
            }
        }
        else {
            alert(res?.message || "Email hoặc mật khẩu không đúng!");
        }
    };

    return (
        <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            login={handleLogin}
        />
    );
}

export default LoginPage;
