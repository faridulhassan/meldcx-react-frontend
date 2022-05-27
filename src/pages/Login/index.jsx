import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import LoginForm from "./LoginForm";
import { postData } from "../../utils";
import { useEffect, useState } from "react";
import Alert from "../../components/Alert";
import { setToken } from "../../services/TokenService";

export default function Login() {
    let navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [alertMessage, setAlertMessage] = useState({});
    let timeout;
    const onSubmit = (formValue) => {
        setIsLoading(true);
        postData({
            path: "/login",
            config: {
                ...formValue
            }
        })
            .then((result) => {
                setToken(result?.data);
                setAlertMessage({
                    message: "You are successfully logged in!",
                    status: result?.status
                });
                timeout = setTimeout(() => {
                    setIsLoading(false);
                    navigate("/devices", { replace: true });
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
    useEffect(() => {
        return () => {
            timeout && clearTimeout(timeout);
        };
    }, []);
    return (
        <div className="">
            <div className="container mx-auto">
                {alertMessage?.message && (
                    <div className="my-3 mx-auto w-[500px] fixed top-0 left-0 right-0 z-900">
                        <Alert bgColor={alertMessage?.status <= 204 ? "bg-green-700" : "bg-red-700"} message={alertMessage?.message} />
                    </div>
                )}
                <div className="flex flex-wrap justify-center pt-52">
                    <div className="w-full md:w-2/4 xl:w-1/4">
                        <div className="relative w-full">
                            <Loader isLoading={isLoading} />
                            <LoginForm onSubmit={onSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
