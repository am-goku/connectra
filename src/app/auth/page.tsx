'use client'

import React, { useState } from "react";
import Link from "next/link";

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    {isLogin ? "Welcome Back" : "Join Connectra"}
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    {isLogin
                        ? "Log in to connect and share with your network."
                        : "Sign up to start your journey with us."}
                </p>

                <form className="space-y-4 text-black">
                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {!isLogin && (
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    )}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                        {isLogin ? "Log In" : "Sign Up"}
                    </button>
                </form>

                {isLogin && (
                    <div className="text-right mt-3">
                        <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                            Forgot password?
                        </Link>
                    </div>
                )}

                <div className="text-center mt-6 text-gray-600">
                    {isLogin ? "Don't have an account?" : "Already have an account?"} {" "}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-blue-600 hover:underline font-medium"
                    >
                        {isLogin ? "Sign Up" : "Log In"}
                    </button>
                </div>

                <div className="mt-8 text-gray-900 font-bold">
                    <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
                        Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
}
