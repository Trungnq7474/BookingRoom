import { NavLink, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext.js";
import useOpen from "../../hooks/useOpen.js";
import './Slidebar.css';
import Logo from "../../assets/logo.png";

function Slidebar() {

    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const { isOpen, setIsOpen } = useOpen();

    const handleLogout = () => {
        logout();
        navigate("/");
        
    };

    return (
        <>
            <aside className={`sidebar ${isOpen ? "" : "close"}`}>

                <div className="icon" onClick={() => setIsOpen(!isOpen)}>
                    <i className="fa-solid fa-bars"></i>
                </div>

                <div className="sidebar-header">
                    <Link to="/admin">
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>

                <nav className="sidebar-menu">
                    <NavLink to="/admin" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
                        <i className="fa-solid fa-chart-line"></i>
                        <span>DashBoard</span>
                    </NavLink>

                    <NavLink to="/manageruser" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
                        <i className="fa-solid fa-users"></i>
                        <span>Người Dùng</span>
                    </NavLink>

                    <NavLink to="/managerassignment" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
                        <i className="fa-solid fa-triangle-exclamation"></i>
                        <span>Sự Cố</span>
                    </NavLink>

                    <NavLink to="/managerroom" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
                        <i className="fa-solid fa-desktop"></i>
                        <span>Phòng</span>
                    </NavLink>

                    <NavLink to="/managertool" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
                        <i className="fa-solid fa-hard-drive"></i>
                        <span>Thiết Bị</span>
                    </NavLink>

                    <NavLink to="/managercalendar" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
                        <i className="fa-regular fa-calendar-days"></i>
                        <span>Đăng Ký Lịch</span>
                    </NavLink>

                    <NavLink to="/managermaintenance" className={({ isActive }) => isActive ? "menu-item active" : "menu-item"}>
                        <i className="fa-solid fa-screwdriver-wrench"></i>
                        <span>Bảo Trì</span>
                    </NavLink>
                </nav>

                <button className="logout" onClick={handleLogout}>
                    <i className="fa-solid fa-right-from-bracket"></i>
                    <span>Đăng Xuất</span>
                </button>

            </aside>
        </>
    )
}

export default Slidebar;
