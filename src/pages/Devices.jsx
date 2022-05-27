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
        <div sx={{ pt: 12 }}>
            <h1>Devices</h1>
            <button size="sm">Notify</button>
            <button size="sm">Log Out</button>
        </div>
    );
}
