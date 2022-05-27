import React from "react";

export default function Login() {
    return (
        <div>
            <form>
                <h3>Login</h3>
                <input placeholder="Email Address" required type="email" sx={{ my: 3 }} />
                <button variant="contained" type="submit">
                    Log In
                </button>
            </form>
        </div>
    );
}
