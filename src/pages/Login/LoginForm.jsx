export default function LoginForm() {
    return (
        <div className="rounded p-3 bg-white text-center text-gray-700 font-light">
            <form>
                <h1 className="text-4xl line-height-2 mb-8">Login</h1>
                <div className="relative flex w-full flex-wrap items-stretch mb-2">
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-800  bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                    </span>
                    <input type="email" placeholder="Email Address" required className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-gray-100  rounded text-sm border-0 outline-none focus:outline-none focus:ring w-full pl-10" />
                </div>
                <div className="relative flex w-full flex-wrap items-stretch mb-2">
                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-800  bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                    <input type="email" placeholder="Password" required className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-gray-100  rounded text-sm border-0 outline-none focus:outline-none focus:ring w-full pl-10" />
                </div>
                <div class="flex space-x-2 justify-center mt-5">
                    <button
                        type="submit"
                        class="inline-block px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                        Log In
                    </button>
                </div>
            </form>
        </div>
    );
}
