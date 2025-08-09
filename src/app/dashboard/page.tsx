/* eslint-disable @next/next/no-img-element */
'use client'

import React from "react";
import { motion } from "framer-motion";
import { FaPlus, FaRegHeart, FaRegComment } from "react-icons/fa";

const HomePage: React.FC = () => {
    const posts = [
        {
            id: 1,
            user: "John Doe",
            avatar: "/avatar1.jpg",
            content: "Enjoying the sunny weather at the beach!",
            image: "/images/sample-img.jpg",
            likes: 120,
            comments: 15,
        },
        {
            id: 2,
            user: "Jane Smith",
            avatar: "/avatar2.jpg",
            content: "Just finished a 5k run, feeling great!",
            image: "/images/sample-img.jpg",
            likes: 95,
            comments: 8,
        },
        {
            id: 3,
            user: "John Doe",
            avatar: "/avatar1.jpg",
            content: "Enjoying the sunny weather at the beach!",
            image: "/images/sample-img.jpg",
            likes: 120,
            comments: 15,
        },
        {
            id: 4,
            user: "Jane Smith",
            avatar: "/avatar2.jpg",
            content: "Just finished a 5k run, feeling great!",
            image: "/images/sample-img.jpg",
            likes: 95,
            comments: 8,
        },
        {
            id: 5,
            user: "John Doe",
            avatar: "/avatar1.jpg",
            content: "Enjoying the sunny weather at the beach!",
            image: "/images/sample-img.jpg",
            likes: 120,
            comments: 15,
        },
        {
            id: 6,
            user: "Jane Smith",
            avatar: "/avatar2.jpg",
            content: "Just finished a 5k run, feeling great!",
            image: "/images/sample-img.jpg",
            likes: 95,
            comments: 8,
        },
    ];

    return (
        <>
            <section className="py-6 px-4 max-w-4xl mx-auto">
                {/* Create Post Section */}
                <div className="bg-white shadow-md rounded-2xl p-4 flex items-center space-x-4">
                    <img
                        src="/avatar-placeholder.png"
                        alt="User Avatar"
                        className="w-12 h-12 rounded-full"
                    />
                    <input
                        type="text"
                        placeholder="What's on your mind?"
                        className="flex-grow px-4 py-2 bg-gray-100 rounded-full focus:outline-none"
                    />
                    <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition">
                        <FaPlus />
                    </button>
                </div>

                {/* Posts Feed */}
                <div className="mt-6 space-y-6">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="bg-white shadow-md rounded-2xl overflow-hidden"
                        >
                            {/* Post Header */}
                            <div className="flex items-center p-4">
                                <img
                                    src={post.avatar}
                                    alt={post.user}
                                    className="w-10 h-10 rounded-full"
                                />
                                <span className="ml-3 font-semibold text-gray-800">
                                    {post.user}
                                </span>
                            </div>

                            {/* Post Content */}
                            <p className="px-4 pb-4 text-gray-700">{post.content}</p>

                            {/* Post Image */}
                            {post.image && (
                                <img src={post.image} alt="Post" className="w-full object-cover" />
                            )}

                            {/* Post Actions */}
                            <div className="flex items-center justify-between p-4 border-t">
                                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition">
                                    <FaRegHeart /> <span>{post.likes}</span>
                                </button>
                                <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition">
                                    <FaRegComment /> <span>{post.comments}</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default HomePage;
