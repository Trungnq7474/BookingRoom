import { BrowserRouter } from "react-router-dom";
import AppRouters from "./routes/AppRouters.jsx";
import AuthProvider from "./contexts/AuthContext.jsx";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <AppRouters />
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;