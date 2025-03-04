import React, {useState} from "react";
import {Eye, EyeOff} from "lucide-react";
import {Link} from "react-router-dom";

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
                        className="flex flex-col items-center h-full w-full max-w-full w-4/5 space-y-4"
                        action="#"
                    >
                        <div className="relative w-full">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-purple-4 text-white-500 rounded-lg focus:ring-purple-1 focus:outline-none block w-full p-5 py-6"
                                placeholder="transcendence@chamanismosSL.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="relative w-full">
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="••••••••"
                                className="bg-purple-4 text-white-500 rounded-lg focus:ring-purple-1 focus:outline-none block w-full p-5 py-6"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 dark:text-gray-400 mt-7"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="w-full text-white bg-purple-1 hover:bg-purple-1 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Sign up
                        </button>
                        <div className="relative flex items-center justify-center w-full my-8">
                        <hr className="w-64 h-px bg-gray-200 border-0 dark:bg-gray-700 my-6" />
                        <span className="absolute px-3 font-medium text-white bg-purple-5 left-1/2 transform -translate-x-1/2">
                            or
                        </span>
                    </div>
                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="w-full text-white bg-rose-600 hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
                    >
                        Log in with Google
                    </button>
                    <button
                        type="button"
                        onClick={handle42Login}
                        className="w-full text-white bg-secondary-600 hover:bg-secondary-700 focus:ring-4 focus:outline-none focus:ring-secondary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-800"
                    >
                        Log in with 42
                    </button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                            Don’t have an account yet?{" "}
                            <Link to="/signup" className="font-medium text-purple-1 hover:underline">
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
