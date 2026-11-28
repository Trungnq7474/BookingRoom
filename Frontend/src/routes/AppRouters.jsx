import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import MainLayoutAdmin from "../layouts/MainLayoutAdmin.jsx";
import DashBoard from "../pages/Admin/DashBoard/DashBoard.jsx";
import ManagerUser from "../pages/Admin/ManagerUser/ManagerUser.jsx";
import ManagerCalendar from "../pages/Admin/ManagerCalendar/ManagerCalendar.jsx";
import ManagerRoom from "../pages/Admin/ManagerRoom/ManagerRoom.jsx";
import ManagerTool from "../pages/Admin/ManagerTool/ManagerTool.jsx";
import ManagerProblem from "../pages/Admin/ManagerProblem/ManagerProblem.jsx";
import ManagerMaintenance from "../pages/Admin/ManagerMaintenance/ManagerMaintenance.jsx";

function AppRouters() {
    return (
        <Routes>

            <Route path="/" element={
                    <LoginPage />
            } />

            <Route path="/admin" element={
                <MainLayoutAdmin>
                    <DashBoard />
                </MainLayoutAdmin>
            } />

            <Route path="/manageruser" element={
                <MainLayoutAdmin>
                    <ManagerUser />
                </MainLayoutAdmin>
            } />

            <Route path="/managercalendar" element={
                <MainLayoutAdmin>
                    <ManagerCalendar />
                </MainLayoutAdmin>
            } />

            <Route path="/managerroom" element={
                <MainLayoutAdmin>
                    <ManagerRoom />
                </MainLayoutAdmin>
            } />

            <Route path="/managertool" element={
                <MainLayoutAdmin>
                    <ManagerTool />
                </MainLayoutAdmin>
            } />

            <Route path="/managerassignment" element={
                <MainLayoutAdmin>
                    <ManagerProblem />
                </MainLayoutAdmin>
            } />

            <Route path="/managermaintenance" element={
                <MainLayoutAdmin>
                    <ManagerMaintenance />
                </MainLayoutAdmin>
            } />

        </Routes>
    )
}

export default AppRouters;