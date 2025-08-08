"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function EditProfilePage() {
  const [profilePic, setProfilePic] = useState<string>("/default-profile.jpg");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    console.log({ name, username, email, bio, profilePic });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          Edit Profile
        </h1>
        <div className="flex flex-col items-center mb-8">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mb-4">
            <Image
              src={profilePic}
              alt="Profile Picture"
              fill
              className="rounded-full object-cover border-4 border-gray-200"
            />
            <label className="absolute bottom-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm rounded-full cursor-pointer hover:bg-blue-700">
              Change
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfilePicChange}
              />
            </label>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
              rows={4}
            ></textarea>
          </div>
          <button
            type="button"
            onClick={handleSave}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
