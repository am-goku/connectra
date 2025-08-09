'use client';

import React, { useState } from 'react';
import { LifeBuoy, ChevronDown, ChevronUp } from 'lucide-react';

function SupportSection({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(true);
    return (
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
            <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <h2 className="text-lg font-semibold text-[#2D3436]">{title}</h2>
                {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            {open && <div className="mt-3 text-sm text-[#636e72] space-y-3">{children}</div>}
        </div>
    );
}

export default function HelpSupportPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 md:px-0 py-10 text-[#2D3436]">
            <div className="flex items-center gap-3 mb-6">
                <LifeBuoy className="text-[#6C5CE7]" size={24} />
                <h1 className="text-2xl font-bold">Help & Support</h1>
            </div>

            <p className="mb-8 text-[#636e72] text-sm">
                Welcome to our Help & Support page. Here you&apos;ll find answers to common questions,
                troubleshooting steps, and ways to get in touch with our team. We’re here to help you have
                the best experience possible.
            </p>

            {/* Sections */}
            <SupportSection title="1. Frequently Asked Questions (FAQs)">
                <ul className="list-disc ml-5 space-y-2">
                    <li><strong>How do I change my password?</strong><br />You can update your password from the <em>Account Settings → Change Password</em> section.</li>
                    <li><strong>How do I make my account private?</strong><br />Navigate to <em>Account Settings → Privacy</em> and toggle the private account option.</li>
                    <li><strong>How can I delete my account?</strong><br />Go to <em>Account Settings</em> and scroll down to find the “Delete My Account” option.</li>
                    <li><strong>How do I report abuse or inappropriate content?</strong><br />Tap on the three dots (...) of any post or message and select “Report”.</li>
                </ul>
            </SupportSection>

            <SupportSection title="2. Contact Support">
                <p>If you need further assistance, reach out to our support team:</p>
                <ul className="list-disc ml-5">
                    <li>Email: <a href="mailto:support@yourapp.com" className="text-[#6C5CE7] underline">support@yourapp.com</a></li>
                    <li>Live Chat: Available Mon–Fri, 9am–6pm IST</li>
                    <li>Twitter: <a href="https://twitter.com/yourapp" className="text-[#6C5CE7] underline">@YourApp</a></li>
                </ul>
            </SupportSection>

            <SupportSection title="3. Troubleshooting Tips">
                <ul className="list-disc ml-5 space-y-2">
                    <li><strong>App not loading?</strong> Try clearing your cache and restarting the app.</li>
                    <li><strong>Login issues?</strong> Make sure your internet is stable and your credentials are correct. Try resetting your password if needed.</li>
                    <li><strong>Notifications not working?</strong> Check system-level notification permissions for the app.</li>
                    <li><strong>Image uploads failing?</strong> Make sure you’re using supported file types and sizes under 5MB.</li>
                </ul>
            </SupportSection>

            <SupportSection title="4. Community Guidelines">
                <p>
                    To ensure a safe space for everyone, please follow our community guidelines:
                </p>
                <ul className="list-disc ml-5">
                    <li>Be respectful and kind in all interactions.</li>
                    <li>Do not post or share offensive, hateful, or explicit content.</li>
                    <li>Report any suspicious or harmful behavior immediately.</li>
                    <li>Follow all local laws and platform rules.</li>
                </ul>
            </SupportSection>

            <SupportSection title="5. Feature Requests & Feedback">
                <p>
                    We love hearing from our users! If you have suggestions or want to request a new feature:
                </p>
                <ul className="list-disc ml-5">
                    <li>Fill out our <a href="#" className="text-[#6C5CE7] underline">feedback form</a>.</li>
                    <li>Email your idea to <a href="mailto:ideas@yourapp.com" className="underline text-[#6C5CE7]">ideas@yourapp.com</a>.</li>
                </ul>
                <p>
                    Our team reviews all submissions and prioritizes based on user impact.
                </p>
            </SupportSection>

            <p className="text-xs text-[#b2bec3] text-center mt-10">
                Last updated: May 31, 2025
            </p>
        </div>
    );
}
