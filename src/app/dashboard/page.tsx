/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 bg-white shadow-sm">
        <div className="text-2xl font-bold text-blue-600">Connectra</div>
        <div className="hidden md:flex space-x-6">
          <Link href="/profile" className="text-gray-700 hover:text-blue-600 transition">
            Profile
          </Link>
          <Link href="/messages" className="text-gray-700 hover:text-blue-600 transition">
            Messages
          </Link>
          <Link href="/settings" className="text-gray-700 hover:text-blue-600 transition">
            Settings
          </Link>
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            Logout
          </button>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-gray-700">☰</button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 px-4 md:px-8 py-6 max-w-7xl mx-auto w-full">
        {/* Welcome Banner */}
        <section className="bg-white rounded-xl shadow p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, John Doe 👋</h1>
          <p className="text-gray-600 mt-2">
            Here’s what’s happening in your network today.
          </p>
        </section>

        {/* Feed */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Sidebar */}
          <aside className="hidden md:block md:col-span-1 space-y-4">
            <div className="bg-white p-4 rounded-xl shadow">
              <h2 className="text-lg font-semibold mb-3">Your Shortcuts</h2>
              <ul className="space-y-2 text-blue-600">
                <li><Link href="/friends">Friends</Link></li>
                <li><Link href="/groups">Groups</Link></li>
                <li><Link href="/events">Events</Link></li>
              </ul>
            </div>
          </aside>

          {/* Main Feed */}
          <section className="md:col-span-2 space-y-6">
            {/* Post Box */}
            <div className="bg-white p-4 rounded-xl shadow">
              <textarea
                placeholder="What's on your mind?"
                className="w-full border p-3 rounded-lg resize-none"
                rows={3}
              ></textarea>
              <div className="flex justify-end mt-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Post
                </button>
              </div>
            </div>

            {/* Example Posts */}
            {[1, 2, 3].map((post) => (
              <div key={post} className="bg-white p-4 rounded-xl shadow">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={`/user${post}.jpg`}
                    alt="User"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Jane Smith</h3>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">
                  Just had the best coffee at the new cafe downtown ☕
                </p>
                <img
                  src="/post-image.jpg"
                  alt="Post"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ))}
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>© {new Date().getFullYear()} Connectra. All rights reserved.</p>
      </footer>
    </div>
  );
}
