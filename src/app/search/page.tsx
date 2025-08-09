'use client'

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Image from 'next/image';

const SearchResultsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState<'users' | 'posts' | 'tags'>('users');

    const users = [
        { id: 1, name: 'Jane Doe', avatar: '/images/sample-profile.jpg', bio: 'Traveler & Photographer' },
        { id: 2, name: 'John Smith', avatar: '/images/sample-profile.jpg', bio: 'Full-stack Developer' }
    ];

    const posts = [
        { id: 1, image: '/images/sample-img.jpg', caption: 'Sunny day at the beach' },
        { id: 2, image: '/images/sample-img.jpg', caption: 'Delicious homemade pizza' }
    ];

    const tags = ['travel', 'foodie', 'photography', 'coding', 'fitness'];

    return (
        <div className="max-w-6xl mx-auto p-4">
            {/* Search Bar */}
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mb-6 text-[#1F2937]">
                <Search className="text-gray-500 ml-3" />
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 px-4 py-2 focus:outline-none"
                />
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b text-[#1F2937]">
                <button
                    onClick={() => setActiveTab('users')}
                    className={`pb-2 ${activeTab === 'users' ? 'border-b-2 border-blue-500 font-semibold' : ''}`}
                >
                    Users
                </button>
                <button
                    onClick={() => setActiveTab('posts')}
                    className={`pb-2 ${activeTab === 'posts' ? 'border-b-2 border-blue-500 font-semibold' : ''}`}
                >
                    Posts
                </button>
                <button
                    onClick={() => setActiveTab('tags')}
                    className={`pb-2 ${activeTab === 'tags' ? 'border-b-2 border-blue-500 font-semibold' : ''}`}
                >
                    Tags
                </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'users' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {users.map(user => (
                        <div key={user.id} className="flex items-center gap-4 p-4 border rounded-lg">
                            <Image src={user.avatar} alt={user.name} width={50} height={50} className="rounded-full" />
                            <div>
                                <h3 className="font-semibold">{user.name}</h3>
                                <p className="text-sm text-gray-500">{user.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === 'posts' && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {posts.map(post => (
                        <div key={post.id} className="border rounded-lg overflow-hidden">
                            <Image src={post.image} alt={post.caption} width={300} height={300} className="w-full h-48 object-cover" />
                            <p className="p-2 text-sm">{post.caption}</p>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === 'tags' && (
                <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-200 rounded-full text-sm cursor-pointer hover:bg-gray-300">
                            #{tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchResultsPage;
