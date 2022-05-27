import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import Devices from "./pages/Devices";
import Login from "./pages/Login";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                        <li>
                            <Link to="/devices">Devices</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route index element={<Login />} />
                    <Route path="devices" element={<Devices />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
