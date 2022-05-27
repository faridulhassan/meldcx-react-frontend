import { createContext, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Devices from "./pages/Devices";
import Login from "./pages/Login";
import { getToken } from "./services/TokenService";

export const AuthContext = createContext({
    authToken: null,
    setAuthToken: () => {}
});

function App() {
    const [authToken, setAuthToken] = useState(getToken() || "");
    const contextValue = useMemo(() => ({ authToken, setAuthToken }), [authToken]);

    return (
        <div className="App">
            <AuthContext.Provider value={contextValue}>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Login />} />
                        <Route path="login" element={<Login />} />
                        <Route path="devices" element={<Devices />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </BrowserRouter>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
