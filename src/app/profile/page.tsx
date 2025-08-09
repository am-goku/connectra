/* eslint-disable @next/next/no-img-element */
'use client'

import React from "react";
import { motion } from "framer-motion";
import { FaUserFriends, FaRegHeart } from "react-icons/fa";

const ProfilePage: React.FC = () => {
  const user = {
    name: "John Doe",
    avatar: "/images/sample-profile.jpg",
    bio: "Beach lover, traveler, and coffee enthusiast. Sharing my adventures with the world.",
    followers: 230,
    following: 180,
    posts: [
      { id: 1, image: "/images/sample-img.jpg", likes: 120 },
      { id: 2, image: "/images/sample-img.jpg", likes: 95 },
      { id: 3, image: "/images/sample-img.jpg", likes: 80 },
    ],
  };

  return (
    <>
      <section className="py-6 px-4 max-w-5xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:space-x-6">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="mt-4 md:mt-0">
            <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-600 mt-1">{user.bio}</p>
            <div className="flex space-x-6 mt-4 text-gray-600">
              <span className="flex items-center space-x-2">
                <FaUserFriends /> <span>{user.followers} Followers</span>
              </span>
              <span className="flex items-center space-x-2">
                <FaUserFriends /> <span>{user.following} Following</span>
              </span>
            </div>
          </div>
        </div>

        {/* User Posts */}
        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {user.posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="relative bg-gray-100 rounded-lg overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition"
            >
              <img
                src={post.image}
                alt={`Post ${post.id}`}
                className="w-full h-60 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-lg font-semibold">
                <FaRegHeart className="mr-2" /> {post.likes}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
