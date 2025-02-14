import React from "react";
import {useState} from "react";
import {Eye, EyeOff} from "lucide-react";
import {Link} from "react-router-dom";

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
        <section
            className="min-h-screen w-full flex items-center justify-center dark:bg-gray-900"
            style={{
                backgroundImage:
                    "url(https://cloud.appwrite.io/v1/storage/buckets/67a35dad003bd04ae78d/files/67af25c10012a475cd28/view?project=67a3581800176f541dfa&mode=admin)",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <div className="w-full max-w-md bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700 p-6 sm:p-8">
                <div className="text-center mb-6">
                    <a
                        href="#"
                        className="flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
                    >
                        <img
                            className="w-8 h-8 mr-2 rounded-full"
                            src="https://cdn.intra.42.fr/users/a3bf1101c1980c29a913126c8ed5a2f2/anurtiag.jpeg"
                            alt="logo"
                        />
                        Antton <span className="ml-1">&lt;3</span>
                    </a>
                </div>
                <h1 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white text-center mb-4">
                    Create an account
                </h1>
                <form className="space-y-4" action="#">
                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="transcendence@chamanismosSL.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative">
                        <label
                            htmlFor="username"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Username
                        </label>
                        <input
                            id="username"
                            placeholder="Generic username"
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-10"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="relative">
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
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-10"
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
                        onClick={handleSignin}
                        type="submit"
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        Sign up
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                            Log in
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default SignupScreen;
