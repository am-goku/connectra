/* eslint-disable @next/next/no-img-element */
'use client'

import React from "react";
import { motion } from "framer-motion";
import { FaRegHeart, FaRegComment, FaShareAlt } from "react-icons/fa";

const PostPage: React.FC = () => {
    const post = {
        id: 1,
        user: "John Doe",
        avatar: "/avatar1.jpg",
        content: "Enjoying the sunny weather at the beach! Loving the vibes and the waves.",
        image: "/images/sample-img.jpg",
        likes: 120,
        comments: [
            { id: 1, user: "Jane Smith", avatar: "/avatar2.jpg", text: "Looks amazing!" },
            { id: 2, user: "Mike Ross", avatar: "/avatar3.jpg", text: "Wish I was there!" },
            { id: 3, user: "Jane Smith", avatar: "/avatar2.jpg", text: "Looks amazing!" },
            { id: 4, user: "Mike Ross", avatar: "/avatar3.jpg", text: "Wish I was there!" },
            { id: 5, user: "Jane Smith", avatar: "/avatar2.jpg", text: "Looks amazing!" },
            { id: 6, user: "Mike Ross", avatar: "/avatar3.jpg", text: "Wish I was there!" },
        ],
        shares: 15,
    };

    return (
        <>
            <section className="py-6 px-4 max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white shadow-md rounded-2xl overflow-hidden"
                >
                    {/* Post Header */}
                    <div className="flex items-center p-4">
                        <img
                            src={post.avatar}
                            alt={post.user}
                            className="w-10 h-10 rounded-full"
                        />
                        <span className="ml-3 font-semibold text-gray-800">{post.user}</span>
                    </div>

                    {/* Post Content */}
                    <p className="px-4 pb-4 text-gray-700">{post.content}</p>

                    {/* Post Image */}
                    {post.image && (
                        <img src={post.image} alt="Post" className="w-full object-cover" />
                    )}

                    {/* Post Actions */}
                    <div className="flex items-center justify-around p-4 border-t">
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition">
                            <FaRegHeart /> <span>{post.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition">
                            <FaRegComment /> <span>{post.comments.length}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition">
                            <FaShareAlt /> <span>{post.shares}</span>
                        </button>
                    </div>
                </motion.div>

                {/* Comments Section */}
                <div className="mt-6 bg-white shadow-md rounded-2xl p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Comments</h3>
                    {post.comments.map((comment) => (
                        <div key={comment.id} className="flex items-start space-x-3 mb-4">
                            <img
                                src={comment.avatar}
                                alt={comment.user}
                                className="w-8 h-8 rounded-full"
                            />
                            <div>
                                <p className="text-gray-800 font-medium">{comment.user}</p>
                                <p className="text-gray-600 text-sm">{comment.text}</p>
                            </div>
                        </div>
                    ))}

                    {/* Add Comment */}
                    <div className="flex items-center mt-4">
                        <img
                            src="/avatar-placeholder.png"
                            alt="Your Avatar"
                            className="w-8 h-8 rounded-full"
                        />
                        <input
                            type="text"
                            placeholder="Write a comment..."
                            className="flex-grow px-4 py-2 ml-3 bg-gray-100 rounded-full focus:outline-none"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default PostPage;
