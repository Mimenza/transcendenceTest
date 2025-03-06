import React, {useState} from "react";
import {Link} from "react-router-dom";

import InputComponent from "../components/input";
import ButtonComponent from "src/components/button";

const LoginScreen = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5001/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({username: email, password})
            });

            if (!response.ok) {
                throw new Error("Credenciales incorrectas");
            }

            const data = await response.json();
            alert(`Token recibido: ${data.token}`);

            // Aquí podrías guardar el token en localStorage o en un contexto de autenticación
            localStorage.setItem("token", data.token);
        } catch (error) {
            alert(error);
        }
    };

    const handleGoogleLogin = () => {
        alert(`Method: Google`);
    };

    const handle42Login = () => {
        alert(`Method: 42`);
    };

    return (
        <section className="flex min-h-screen w-full dark:bg-purple-4  items-center justify-center px-40">
            <div className="bg-purple-5 flex-1 rounded-xl flex shadow">
                <div className="bg-purple-2 flex-1 mt-5 mb-5 ml-5 rounded-xl hidden md:block"></div>
                <div className="flex-1  flex flex-col items-center space-y-24 py-28">
                    <div className="">
                        <h1 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white text-center mb-4">
                            Log in into your account
                        </h1>
                    </div>

                    <form
                        className="flex flex-col items-center h-full max-w-full w-4/5 space-y-4"
                        action="#"
                    >
                        <InputComponent
                            label="Your email"
                            type="email"
                            id="email"
                            placeholder="transcendence@chamanismosSL.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <InputComponent
                            label="Password"
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                         <ButtonComponent id="" type="submit" value="Log in" onClick={handleSubmit} />
                        <div className="relative flex items-center justify-center w-full my-8">
                            <hr className="w-64 h-px bg-gray-200 border-0 dark:bg-gray-700 my-6" />
                            <span className="absolute px-3 font-medium text-white bg-purple-5 left-1/2 transform -translate-x-1/2">
                                or
                            </span>
                        </div>
                        <ButtonComponent id="alternative" type="button" value="Log in with Google" onClick={handleGoogleLogin} />
                        <ButtonComponent id="alternative" type="button" value="Log in with 42" onClick={handle42Login} />

                        <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                            Don’t have an account yet?{" "}
                            <Link
                                to="/signup"
                                className="font-medium text-purple-1 hover:underline"
                            >
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LoginScreen;
