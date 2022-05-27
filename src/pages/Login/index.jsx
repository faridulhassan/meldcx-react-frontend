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
    const [errorMessage, setErrorMessage] = useState("");
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
                setIsLoading(false);
                setToken(result);
                navigate("/devices", { replace: true });
            })
            .catch((error) => {
                setIsLoading(false);
                setErrorMessage(error.data);
                timeout = setTimeout(() => {
                    setErrorMessage("");
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
                <div className="flex flex-wrap justify-center pt-52">
                    <div className="w-full md:w-2/4 xl:w-1/4">
                        <div className="relative w-full">
                            <Loader isLoading={isLoading} />
                            <LoginForm onSubmit={onSubmit} />
                        </div>

                        {!isLoading && errorMessage && <Alert bgColor="red" message={errorMessage} className="my-3" />}
                    </div>
                </div>
            </div>
        </div>
    );
}
