'use client'

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const LoginPage: React.FC = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login submitted:", formData);
    };

    return (
        <>
            <section className="py-20 px-6 flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
                >
                    <h1 className="text-3xl font-bold text-blue-600 text-center">
                        Welcome Back
                    </h1>
                    <p className="mt-2 text-gray-500 text-center">
                        Log in to continue to SocialSphere.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <div>
                            <label className="block text-gray-600 mb-1">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 mb-1">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Log In
                        </button>
                    </form>

                    <div className="mt-4 flex justify-between text-sm text-gray-500">
                        <Link href="/forgot-password" className="hover:underline">
                            Forgot Password?
                        </Link>
                        <Link href="/signup" className="text-blue-600 hover:underline">
                            Create Account
                        </Link>
                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default LoginPage;
