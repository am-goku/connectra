'use client'

import { useState } from 'react';
import { MoreVertical } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function OtherUserProfilePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const samplePosts = [
    { id: 1, image: '/images/sample-img.jpg' },
    { id: 2, image: '/images/sample-img.jpg' },
    { id: 3, image: '/images/sample-img.jpg' },
    { id: 3, image: '/images/sample-img.jpg' },
    { id: 3, image: '/images/sample-img.jpg' },
    { id: 3, image: '/images/sample-img.jpg' },
    { id: 3, image: '/images/sample-img.jpg' },
    { id: 3, image: '/images/sample-img.jpg' },
    { id: 3, image: '/images/sample-img.jpg' },
    { id: 3, image: '/images/sample-img.jpg' },
    { id: 3, image: '/images/sample-img.jpg' },
    { id: 3, image: '/images/sample-img.jpg' },
    { id: 3, image: '/images/sample-img.jpg' },
    { id: 3, image: '/images/sample-img.jpg' },
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 text-[#fff]">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div className="flex items-center gap-4">
          <Image
            src="/images/sample-profile.jpg"
            alt="User Avatar"
            width={96}
            height={96}
            className="rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <p className="text-gray-500">@johndoe</p>
            <div className="flex gap-2 mt-2">
              <Button className="bg-blue-500 hover:bg-blue-600">Follow</Button>
              <Button variant="outline">Message</Button>
            </div>
          </div>
        </div>
        <div className="relative mt-4 sm:mt-0">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <MoreVertical className="w-6 h-6" />
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10 text-gray-600">
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Message</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Block</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Report</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">More</button>
            </div>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-6 mb-6">
        <span><strong>120</strong> Posts</span>
        <span><strong>5.2k</strong> Followers</span>
        <span><strong>340</strong> Following</span>
      </div>

      {/* Bio */}
      <div className="mb-6">
        <p className="text-gray-300">
          Coffee enthusiast ☕ | Traveler 🌍 | Sharing my adventures and thoughts.
        </p>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {samplePosts.map((post) => (
          <Card key={post.id} className="overflow-hidden cursor-pointer">
            <CardContent className="p-0">
              <Image
                src={post.image}
                alt={`Post ${post.id}`}
                width={300}
                height={300}
                className="w-full h-48 object-cover hover:scale-105 transition-transform"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
