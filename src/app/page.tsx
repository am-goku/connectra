'use client'

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const LandingPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-blue-600"
        >
          Welcome to SocialSphere
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
        >
          Connect, share, and explore with friends and the world around you.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 flex justify-center space-x-4"
        >
          <Link
            href="/signup"
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition"
          >
            Learn More
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
        {[
          {
            title: "Connect with Friends",
            description: "Stay in touch with people who matter to you the most.",
          },
          {
            title: "Share Your Moments",
            description: "Post photos, videos, and updates with ease.",
          },
          {
            title: "Discover New Content",
            description: "Explore trending posts and discover inspiring people.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="p-6 bg-white shadow-lg rounded-2xl hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-blue-600">
              {feature.title}
            </h3>
            <p className="mt-3 text-gray-500">{feature.description}</p>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Join SocialSphere Today
        </h2>
        <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
          Sign up now and start connecting with friends, sharing moments, and exploring new horizons.
        </p>
        <Link
          href="/signup"
          className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition"
        >
          Create an Account
        </Link>
      </section>
    </>
  );
};

export default LandingPage;
