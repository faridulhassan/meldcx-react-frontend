import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import ActiveDevices from "./ActiveDevices";

export default function Devices() {
    const devices = [
        { id: 0, name: "Jyoti" },
        { id: 1, name: "Fionna" },
        { id: 2, name: "Roze" },
        { id: 3, name: "Zandra" },
        { id: 4, name: "Blondie" },
        { id: 5, name: "Kippy" },
        { id: 6, name: "Sunshine" },
        { id: 7, name: "Catlee" },
        { id: 8, name: "Maible" },
        { id: 9, name: "Tamarra" },
        { id: 10, name: "Pierrette" },
        { id: 11, name: "Channa" }
    ];
    const [activeDevices, setActiveDevices] = useState(devices);
    useEffect(() => {
        const appEl = document.querySelector(".App");
        appEl.classList.add("bg--secondary");

        return () => {
            appEl.classList.remove("bg--secondary");
        };
    }, []);
    return (
        <div>
            <ActiveDevices activeDevices={activeDevices} />
            <div className="fixed bottom-0 w-full bg-opacity-20 bg-gray-900 py-2">
                <div className="container text-center">
                    <Button className="bg-white m-1 w-[110px] text-black rounded-md">Notify</Button>
                    <Button className="bg-gray-800 m-1 w-[110px] rounded-md">Log Out</Button>
                </div>
            </div>
        </div>
    );
}
