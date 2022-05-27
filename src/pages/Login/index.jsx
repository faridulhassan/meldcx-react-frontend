import LoginForm from "./LoginForm";

export default function Login() {
    return (
        <div className="">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full  md:w-2/4 xl:w-1/4 ">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
