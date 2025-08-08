'use client'

import React, { useState } from 'react';
import { FiArrowLeft, FiMenu } from 'react-icons/fi';

const MessagePage: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const users = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
    { id: '3', name: 'Charlie' }
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white flex items-center justify-between p-4 shadow-md">
        <h1 className="text-lg font-bold">Connectra Messages</h1>
        <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <FiMenu size={24} />
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* User List */}
        <aside
          className={`bg-gray-100 border-r border-gray-300 md:w-1/4 w-full md:block ${
            sidebarOpen ? 'block' : 'hidden'
          }`}
        >
          <ul>
            {users.map(user => (
              <li
                key={user.id}
                className="p-4 border-b hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  setSelectedUser(user.name);
                  setSidebarOpen(false);
                }}
              >
                {user.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* Chat Area */}
        <main className="flex-1 flex flex-col">
          {selectedUser ? (
            <>
              {/* Chat Header */}
              <div className="flex items-center p-4 border-b bg-white shadow-sm">
                <button
                  className="md:hidden mr-2"
                  onClick={() => setSelectedUser(null)}
                >
                  <FiArrowLeft size={24} />
                </button>
                <h2 className="font-semibold text-gray-800">{selectedUser}</h2>
              </div>
              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                <p className="text-gray-500">Chat with {selectedUser}...</p>
              </div>
              {/* Chat Input */}
              <div className="p-4 border-t bg-white flex items-center">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 border rounded-lg p-2 mr-2"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Send</button>
              </div>
            </>
          ) : (
            <div className="hidden md:flex flex-1 items-center justify-center text-gray-500">
              Select a user to start chatting
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default MessagePage;
