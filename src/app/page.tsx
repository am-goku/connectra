'use client'

import React from "react";
import Link from "next/link";
import { useState } from "react";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 shadow-sm bg-white relative">
        <div className="text-2xl font-bold text-blue-600">Connectra</div>
        <div className="hidden md:flex space-x-6">
          <Link href="#features" className="text-gray-700 hover:text-blue-600 transition">
            Features
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-blue-600 transition">
            About
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          ☰
        </button>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col md:hidden">
            <Link href="#features" className="p-4 border-b hover:bg-gray-50">Features</Link>
            <Link href="#about" className="p-4 border-b hover:bg-gray-50">About</Link>
            <Link href="#contact" className="p-4 border-b hover:bg-gray-50">Contact</Link>
            <Link href="/signup" className="p-4 hover:bg-gray-50">Get Started</Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-12 md:py-16 max-w-7xl mx-auto">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Connect, Share, and Grow Your Network
          </h1>
          <p className="text-lg text-gray-600">
            Connectra is the modern way to connect with friends, share your moments,
            and discover new opportunities.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
            <Link
              href="/signup"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition w-full md:w-auto text-center"
            >
              Join Now
            </Link>
            <Link
              href="#features"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg text-lg hover:bg-blue-50 transition w-full md:w-auto text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-image.svg"
            alt="Social Media Hero"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Features</h2>
          <p className="text-gray-600 mt-4">
            Everything you need to stay connected and engaged.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Real-Time Chat",
              desc: "Stay connected with friends and colleagues instantly.",
              icon: "💬",
            },
            {
              title: "Content Sharing",
              desc: "Post photos, videos, and updates seamlessly.",
              icon: "📸",
            },
            {
              title: "Personalized Feed",
              desc: "See the content that matters most to you.",
              icon: "🎯",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">About Connectra</h2>
          <p className="mt-4 text-gray-600">
            Our mission is to make it easier than ever to connect with like-minded individuals.
            Whether for personal connections or professional networking, Connectra is your go-to platform.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-gray-600">
            Have questions or feedback? We’d love to hear from you.
          </p>
          <form className="mt-8 grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              className="border p-3 rounded-lg w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border p-3 rounded-lg w-full"
            />
            <textarea
              placeholder="Your Message"
              className="border p-3 rounded-lg w-full md:col-span-2"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition md:col-span-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>© {new Date().getFullYear()} Connectra. All rights reserved.</p>
      </footer>
    </div>
  );
}
