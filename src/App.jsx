import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Devices from "./pages/Devices";
import Login from "./pages/Login";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="devices" element={<Devices />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
