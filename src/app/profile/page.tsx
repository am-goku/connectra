import React from "react";
import Image from "next/image";

export default function ProfilePage() {
    const isCurrentUser = true; // Toggle to see different states

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-10">
                <div className="container mx-auto flex items-center justify-between p-4">
                    <h1 className="text-2xl font-bold text-indigo-600">Connectra</h1>
                    {isCurrentUser && (
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                            Edit Profile
                        </button>
                    )}
                </div>
            </header>

            {/* Profile Banner */}
            <div className="relative w-full h-48 bg-gradient-to-r from-indigo-500 to-purple-500">
                <div className="absolute -bottom-16 left-8 flex items-center space-x-4">
                    <Image
                        src="/profile-pic.jpg"
                        alt="Profile Picture"
                        width={128}
                        height={128}
                        className="rounded-full border-4 border-white object-cover"
                    />
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
                        <p className="text-gray-600">@johndoe</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="container mx-auto px-4 pt-20 pb-8 grid md:grid-cols-3 gap-6">
                {/* Left Sidebar */}
                <aside className="md:col-span-1 space-y-4">
                    <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="font-semibold mb-2">About</h3>
                        <p className="text-gray-600 text-sm">
                            Passionate developer, coffee lover, and avid traveler.
                        </p>
                    </div>

                    <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="font-semibold mb-2">Interests</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Tech", "Music", "Travel", "Photography"].map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Center Feed */}
                <section className="md:col-span-2 space-y-4">
                    {isCurrentUser ? (
                        <div className="bg-white shadow rounded-lg p-4">
                            <textarea
                                className="w-full border rounded-lg p-2 text-sm"
                                placeholder="What's on your mind?"
                            />
                            <div className="flex justify-end mt-2">
                                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                                    Post
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-white shadow rounded-lg p-4 text-center text-gray-500">
                            Follow John to see their posts.
                        </div>
                    )}

                    {[1, 2, 3].map((post) => (
                        <div key={post} className="bg-white shadow rounded-lg p-4">
                            <h4 className="font-semibold mb-2">Post Title {post}</h4>
                            <p className="text-gray-600 text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
}
