import React from 'react';
import Image from 'next/image';
import { Search, UserPlus, Tag } from 'lucide-react';

export default function ExplorePage() {
    const posts = Array.from({ length: 9 }, (_, i) => ({
        id: i,
        image: `/images/sample-img.jpg`,
        title: `Post Title ${i + 1}`,
    }));

    const tags = ['Fitness', 'Travel', 'Food', 'Coding', 'Art', 'Photography'];
    const suggestions = [
        { id: 1, name: 'John Doe', avatar: '/images/sample-profile.jpg' },
        { id: 2, name: 'Jane Smith', avatar: '/images/sample-profile.jpg' },
        { id: 3, name: 'Alex Johnson', avatar: '/images/sample-profile.jpg' },
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-6 p-4 max-w-7xl mx-auto">
            {/* Left column */}
            <div className="flex-1">
                {/* Search Bar */}
                <div className="flex items-center gap-2 mb-4 bg-white p-2 rounded-lg shadow-sm">
                    <Search className="text-gray-500" size={20} />
                    <input
                        type="text"
                        placeholder="Search posts, tags, or users..."
                        className="flex-1 outline-none bg-transparent text-sm"
                    />
                </div>

                {/* Tags */}
                <div className="flex gap-2 overflow-x-auto pb-2 mb-4 text-white">
                    {tags.map((tag) => (
                        <button
                            key={tag}
                            className="flex items-center gap-1 px-3 py-1 rounded-full border border-gray-300 text-sm hover:bg-gray-100 hover:text-black"
                        >
                            <Tag size={14} /> {tag}
                        </button>
                    ))}
                </div>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {posts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg shadow hover:shadow-md overflow-hidden">
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={400}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-3">
                                <h3 className="font-semibold text-sm">{post.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right column */}
            <div className="w-full lg:w-72 space-y-6">
                {/* Suggested Users */}
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="font-semibold mb-3">Suggested Users</h2>
                    {suggestions.map((user) => (
                        <div key={user.id} className="flex items-center justify-between mb-3 last:mb-0">
                            <div className="flex items-center gap-2">
                                <Image
                                    src={user.avatar}
                                    alt={user.name}
                                    width={32}
                                    height={32}
                                    className="rounded-full"
                                />
                                <span className="text-sm font-medium">{user.name}</span>
                            </div>
                            <button className="flex items-center gap-1 text-blue-500 text-xs border border-blue-500 px-2 py-1 rounded-full hover:bg-blue-50">
                                <UserPlus size={14} /> Follow
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
