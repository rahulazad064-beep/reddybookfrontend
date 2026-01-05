import React from "react";
import { useState } from "react";

export default function LoginModal({ onClose }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async () => {
        if (!username || !password) {
            setError("Username and password are required");
            return;
        }

        try {
            setLoading(true);
            setError("");

            const res = await fetch("https://reddybookbackend.onrender.com/auth/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    emailOrNumber: username,
                    password,
                }),
            });

            window.location.reload();

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            {/* Modal Container */}
            <div className="relative md:w-[63%] w-[92%] max-w-5xl h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl flex">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white text-[10px] font-bold z-[200]"
                >
                    ✕
                </button>
                {/* LEFT PANEL */}
                <div className="w-full md:w-1/2 bg-[#0b5fa5] text-white px-8 py-16 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-center tracking-wide mb-6">
                        LOGIN NOW
                    </h2>

                    {/* Username */}
                    <div className="mb-4">
                        <label className="text-sm block mb-1">
                            USERNAME / MOBILE NUMBER
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full h-11 rounded-md bg-[#0a4e88] px-4 text-white outline-none placeholder:text-gray-300"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                        <label className="text-sm block mb-1">PASSWORD</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full h-11 rounded-md bg-[#0a4e88] px-4 text-white outline-none placeholder:text-gray-300"
                        />
                    </div>

                    {/* Remember / Forgot */}
                    <div className="flex items-center justify-between text-sm mb-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="accent-white" />
                            Remember Me?
                        </label>
                        <span className="cursor-pointer hover:underline">
                            Forgot Password
                        </span>
                    </div>

                    {/* Login Button */}
                    <button
                        onClick={handleLogin}
                        className="w-full bg-white text-black font-semibold py-2 rounded-full mb-3">
                        LOG IN
                    </button>

                    {/* Demo Login */}
                    <button className="w-full border border-white text-white font-semibold py-2 rounded-full mb-3">
                        LOGIN WITH DEMO ID
                    </button>

                    {/* Download APK */}
                    <button className="w-full bg-[#8b0015] text-white font-semibold py-2 rounded-full flex items-center justify-center gap-2">
                        Download APK <span className="text-lg">🤖</span>
                    </button>

                    {/* Footer */}
                    <div className="text-center text-xs mt-6 opacity-90">
                        Powered by <span className="text-red-400">reddybook</span>
                        <br />
                        reddybook.clubofficial@gmail.com
                    </div>
                </div>

                {/* RIGHT PANEL */}
                <div
                    className="hidden md:flex w-1/2 bg-cover bg-center relative"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1')",
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-green-600/70"></div>

                    {/* Text */}
                    <div className="relative z-10 w-full flex flex-col justify-between p-8 text-white">
                        <h1 className="text-5xl font-extrabold tracking-wider text-center mt-6">
                            SPORTS
                        </h1>

                        <h1 className="text-6xl font-extrabold tracking-wider text-center mb-10">
                            BOOK
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
