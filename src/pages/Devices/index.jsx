import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NOTIFY_PARAMS } from "../../api";
import Alert from "../../components/Alert";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import { deleteToken, getToken } from "../../services/TokenService";
import { postData } from "../../utils";
import ActiveDevices from "./ActiveDevices";

export default function Devices() {
    let navigate = useNavigate();

    let timeout;

    const [isLoading, setIsLoading] = useState(false);
    const [alertMessage, setAlertMessage] = useState({});

    const [activeDevices, setActiveDevices] = useState([]);

    const token = getToken();
    const onNotifyClick = (e) => {
        e.preventDefault();
        setIsLoading(true);
        postData({
            path: "/notify",
            config: {
                ...NOTIFY_PARAMS
            },
            token
        })
            .then((result) => {
                setIsLoading(false);
                setAlertMessage({
                    message: result?.data,
                    status: result?.status
                });
                timeout = setTimeout(() => {
                    setAlertMessage({});
                }, 3000);
            })
            .catch((error) => {
                setIsLoading(false);
                setAlertMessage({
                    message: error?.data,
                    status: error?.status
                });
                timeout = setTimeout(() => {
                    setAlertMessage({});
                }, 3000);
            });
    };

    const onLogoutClick = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            deleteToken();
            navigate("/", { replace: true });
            setIsLoading(false);
        }, 2000);
    };

    useEffect(() => {
        const appEl = document.querySelector(".App");
        appEl.classList.add("bg--secondary");
        setIsLoading(false);

        return () => {
            appEl.classList.remove("bg--secondary");
            timeout && clearTimeout(timeout);
        };
    }, []);

    return (
        <div className="pt-40">
            <div className="">
                <Loader isLoading={isLoading} />
            </div>
            <ActiveDevices activeDevices={activeDevices} />
            {!isLoading && alertMessage?.message && (
                <div className="my-3 mx-auto w-[500px] fixed top-0 left-0 right-0 z-900">
                    <Alert bgColor={alertMessage?.status <= 204 ? "bg-green-700" : "bg-red-700"} message={alertMessage?.message} />
                </div>
            )}
            <div className="fixed bottom-0 w-full bg-opacity-20 bg-gray-900 py-2">
                <div className="container text-center">
                    <Button onClick={onNotifyClick} className="bg-white m-1 w-[110px] text-black rounded-md">
                        Notify
                    </Button>
                    <Button onClick={onLogoutClick} className="bg-gray-800 m-1 w-[110px] rounded-md">
                        Log Out
                    </Button>
                </div>
            </div>
        </div>
    );
}
