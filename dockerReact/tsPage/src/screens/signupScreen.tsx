import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

import InputComponent from "../components/input";
import ButtonComponent from "src/components/button";

const SignupScreen = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleSignin = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://localhost:5001/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });
    
            const data = await response.json();
    
            if (!response.ok) {
                throw new Error(data.error || "Error en el registro");
            }
    
            alert("Registro exitoso. Ahora puedes iniciar sesión.");
        } catch (error) {
            alert(error);
        }
    };
    

    return (
        <section className="flex min-h-screen w-full dark:bg-purple-4  items-center justify-center px-40">
        <div className="bg-purple-5 flex-1 rounded-xl flex shadow">
            <div className="bg-purple-2 flex-1 mt-5 mb-5 ml-5 rounded-xl hidden md:block"></div>
            <div className="flex-1  flex flex-col items-center space-y-24 py-28">
                <div className="">
                    <h1 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white text-center mb-4">
                        Create a new account
                    </h1>
                </div>

                <form
                    className="flex flex-col items-center h-full max-w-full w-4/5 space-y-4"
                    action="#"
                >
                    <InputComponent
                        label="Your username"
                        type="username"
                        id="username"
                        placeholder="generic username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

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
                     <ButtonComponent id="" type="submit" value="Sign up" onClick={handleSignin} />
                    <div className="relative flex items-center justify-center w-full my-8">
                        <hr className="w-64 h-px bg-gray-200 border-0 dark:bg-gray-700 my-6" />
                        <span className="absolute px-3 font-medium text-white bg-purple-5 left-1/2 transform -translate-x-1/2">
                            or
                        </span>
                    </div>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                        Already have and account?{" "}
                        <Link
                            to="/login"
                            className="font-medium text-purple-1 hover:underline"
                        >
                            Log in
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    </section>
    );
};

export default SignupScreen;
