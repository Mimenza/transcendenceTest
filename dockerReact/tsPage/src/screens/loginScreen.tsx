import React, {useState} from "react";
import {Eye, EyeOff} from "lucide-react";
import {Link} from "react-router-dom";

const LoginScreen = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Email: ${email}\nPassword: ${password}\nMethod: Standard`);
    };

    const handleGoogleLogin = () => {
        alert(`Method: Google`);
    };

    const handle42Login = () => {
        alert(`Method: 42`);
    };

    return (
        <section
            className="min-h-screen w-full flex items-center justify-center dark:bg-gray-900"
            style={{
                backgroundImage:
                    "url(https://auth.42.fr/auth/resources/yyzrk/login/students/img/bkgrnd.jpg)",
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
                    Log in to your account
                </h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
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
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember"
                                type="checkbox"
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            />
                            <label
                                htmlFor="remember"
                                className="ml-2 text-sm text-gray-500 dark:text-gray-300"
                            >
                                Remember me
                            </label>
                        </div>
                        <a
                            href="#"
                            className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                            Forgot password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        Log in
                    </button>
                    <div className="relative flex items-center justify-center w-full my-8">
                        <hr className="w-64 h-px bg-gray-200 border-0 dark:bg-gray-700 my-6" />
                        <span className="absolute px-3 font-medium text-gray-900 bg-white left-1/2 transform -translate-x-1/2 dark:text-white dark:bg-gray-800">
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
                        <Link
                            to="/signup"
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default LoginScreen;
