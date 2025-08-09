'use client';

import { useState } from 'react';

export default function ProfileSettings() {
  const [fullName, setFullName] = useState('John Doe');
  const [username, setUsername] = useState('johndoe');
  const [bio, setBio] = useState('');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [birthday, setBirthday] = useState('');
  const [showEmail, setShowEmail] = useState(true);
  const [showPhone, setShowPhone] = useState(false);
  const [showOnlineStatus, setShowOnlineStatus] = useState(true);
  const [language, setLanguage] = useState('English');

  return (
    <div className="space-y-8">
      {/* Profile Media */}
      <section className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Profile Media</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Profile Picture</label>
            <input type="file" accept="image/*" className="block w-full text-sm" />
            <p className="text-xs text-gray-500 mt-1">Max size: 5MB. Recommended: 400×400px JPG, PNG, or WEBP.</p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Cover Photo</label>
            <input type="file" accept="image/*" className="block w-full text-sm" />
            <p className="text-xs text-gray-500 mt-1">Wide aspect recommended.</p>
          </div>
        </div>
      </section>

      {/* Basic Info */}
      <section className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Basic Info</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input value={fullName} onChange={(e) => setFullName(e.target.value)} maxLength={50} className="w-full rounded border p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} minLength={3} maxLength={30} className="w-full rounded border p-2" />
            <p className="text-xs text-gray-500">@{username}</p>
          </div>
        </div>
        <div className="mt-4">
          <label className="inline-flex items-center gap-2">
            <input type="checkbox" /> Use display name instead of username
          </label>
        </div>
      </section>

      {/* Bio & Links */}
      <section className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Bio & Links</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Bio</label>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} maxLength={160} className="w-full rounded border p-2" />
            <p className="text-xs text-gray-500">{160 - bio.length} characters left</p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Website</label>
            <input value={website} onChange={(e) => setWebsite(e.target.value)} className="w-full rounded border p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input value={location} onChange={(e) => setLocation(e.target.value)} className="w-full rounded border p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Pronouns</label>
            <input value={pronouns} onChange={(e) => setPronouns(e.target.value)} className="w-full rounded border p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Birthday</label>
            <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} className="w-full rounded border p-2" />
          </div>
        </div>
      </section>

      {/* Profile Settings */}
      <section className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Profile Settings</h2>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={showEmail} onChange={(e) => setShowEmail(e.target.checked)} /> Show email on profile
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={showPhone} onChange={(e) => setShowPhone(e.target.checked)} /> Show phone on profile
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={showOnlineStatus} onChange={(e) => setShowOnlineStatus(e.target.checked)} /> Show online status
          </label>
          <div>
            <label className="block text-sm font-medium mb-1">Language</label>
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="w-full rounded border p-2">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
        </div>
      </section>

      {/* Save All Changes */}
      <div className="sticky bottom-0 bg-white dark:bg-gray-900 p-4 border-t flex justify-end gap-2">
        <button className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700">Reset</button>
        <button className="px-4 py-2 rounded bg-blue-600 text-white">Save All Changes</button>
      </div>
    </div>
  );
}
