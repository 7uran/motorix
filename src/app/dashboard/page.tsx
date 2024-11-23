"use client";
import Sidebar from '@/components/DashboardSidebar';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Dashboard = () => {
    const pathname = usePathname();
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const cookies = document.cookie.split(';');
        cookies.forEach(cookie => {
            const [name, value] = cookie.trim().split('=');
            if (name === 'username') {
                setUserName(value);
            }
        });
    }, []);

    return (
        <div className="flex">

            <Sidebar />

            <div className="flex-1 bg-gray-50 p-8 ml-64">
                <div className="bg-gradient-to-r from-[#F46E21] to-[#FFB84C] text-white p-8 rounded-xl shadow-2xl mb-8">
                    <h1 className="text-4xl font-bold">Welcome, {userName ? userName : 'User'}!</h1>
                    <p className="text-xl mt-4 opacity-80">
                        Manage your dashboard efficiently.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-[#F46E21] text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                        <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
                        <p>Manage and view all your blog posts here.</p>
                    </div>
                    <div className="bg-[#34D399] text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                        <h2 className="text-2xl font-semibold mb-4">Users</h2>
                        <p>View and manage all users in your system.</p>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg mt-8">
                    <h2 className="text-2xl font-semibold text-[#191919] mb-4">Quick Links</h2>
                    <p className="text-[#191919] opacity-70 mb-6">Navigate easily to different sections of your dashboard.</p>
                    <ul className="space-y-4">
                        <li>
                            <Link href="/dashboard/dashboard-blog" className="text-[#F46E21] hover:underline hover:text-[#FFB84C]">Manage Blog</Link>
                        </li>
                        <li>
                            <Link href="/dashboard/dashboard-users" className="text-[#F46E21] hover:underline hover:text-[#FFB84C]">Manage Users</Link>
                        </li>
                        <li>
                            <Link href="/dashboard/dashboard-shop" className="text-[#F46E21] hover:underline hover:text-[#FFB84C]">Shop Cards</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
