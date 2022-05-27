import { useCallback, useState } from "react";

export default function Alert({ message = "", bgColor = "green", className = "" }) {
    const [showAlert, setShowAlert] = useState(true);
    const getBGColor = useCallback(() => ` bg-${bgColor}-700 `);
    return (
        <>
            {showAlert ? (
                <div className={`text-white  px-6 py-4 border-0 rounded relative mb-4 ${getBGColor()} ${className}`}>
                    <span className="inline-block align-middle mr-8 font-medium">{message}</span>
                    <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-3 mr-5 outline-none focus:outline-none" onClick={() => setShowAlert(false)}>
                        <span>×</span>
                    </button>
                </div>
            ) : null}
        </>
    );
}
