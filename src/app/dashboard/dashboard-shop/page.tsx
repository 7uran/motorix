"use client"
import Sidebar from "@/components/DashboardSidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardShop() {
    const pathname = usePathname();

    return (
        <div className="flex bg-[#F0EEEF]">
            <Sidebar />

            <div className="flex-1 bg-[#F0EEEF] p-6">
                <h1 className="text-3xl font-bold mb-4 text-[#191919]">Blog</h1>
                <p className="text-[#191919]">Your dashboard content goes here. You can add specific sections for Blog, Teams, Users, and Shop Cards.</p>
            </div>
        </div>
    );
}
