import React, { useEffect } from "react";

export default function Devices() {
    useEffect(() => {
        const appEl = document.querySelector(".App");
        appEl.classList.add("bg--secondary");

        return () => {
            appEl.classList.remove("bg--secondary");
        };
    }, []);
    return (
        <div>
            <h1>Devices</h1>
            <button>Notify</button>
            <button>Log Out</button>
        </div>
    );
}
