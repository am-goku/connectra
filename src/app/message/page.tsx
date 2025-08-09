"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

export default function ChatPage() {
    const [selectedUser, setSelectedUser] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<"list" | "chat">("list");

    const users = [
        { id: "1", name: "Alice" },
        { id: "2", name: "Bob" },
        { id: "3", name: "Charlie" },
    ];

    const messages = [
        { from: "Alice", text: "Hey! How are you?" },
        { from: "me", text: "I'm good, thanks! How about you?" },
        { from: "Alice", text: "Doing well! What’s up?" },
    ];

    const handleSelectUser = (id: string) => {
        setSelectedUser(id);
        setActiveTab("chat");
    };

    return (
        <div className="h-screen flex flex-col md:flex-row bg-white border rounded-lg overflow-hidden">
            {/* User List */}
            <div
                className={cn(
                    "w-full md:w-1/3 border-r border-gray-200 flex-shrink-0 bg-gray-50 md:block",
                    activeTab === "chat" ? "hidden md:block" : "block"
                )}
            >
                <div className="p-4 font-bold border-b">Chats</div>
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="p-4 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSelectUser(user.id)}
                    >
                        {user.name}
                    </div>
                ))}
            </div>

            {/* Chat Area */}
            <div
                className={cn(
                    "flex flex-col w-full md:w-2/3",
                    activeTab === "list" ? "hidden md:flex" : "flex"
                )}
            >
                {/* Header */}
                <div className="flex items-center p-4 border-b">
                    {/* Back button for mobile */}
                    <button
                        className="md:hidden mr-2"
                        onClick={() => setActiveTab("list")}
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </button>
                    <span className="font-bold">
                        {users.find((u) => u.id === selectedUser)?.name || "Select a chat"}
                    </span>
                </div>

                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "mb-2 p-2 rounded-lg max-w-[70%]",
                                msg.from === "me"
                                    ? "bg-blue-500 text-white ml-auto"
                                    : "bg-gray-200 text-gray-800"
                            )}
                        >
                            {msg.text}
                        </div>
                    ))}
                </div>

                {/* Input */}
                <div className="p-4 border-t flex">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none"
                    />
                    <button className="bg-blue-500 text-white px-4 rounded-r-lg">
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
