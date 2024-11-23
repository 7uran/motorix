"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="w-64 h-screen bg-[#191919] text-white fixed top-0 left-0">
            <div className="p-5 text-xl font-semibold">
                <Image
                    width={198}
                    height={27}
                    alt="Logo"
                    src="https://motorix.themerex.net/wp-content/uploads/2024/01/logo-inverse.png"
                />
            </div>
            <ul className="mt-6 space-y-4">
                <li>
                    <Link
                        href="/dashboard/dashboard-blog"
                        className={`block px-4 py-2 rounded ${pathname === "/dashboard/dashboard-blog"
                            ? "bg-[#F46E21]"
                            : "hover:bg-[#F46E21]"
                            }`}
                    >
                        Blog
                    </Link>
                </li>

                <li>
                    <Link
                        href="/dashboard/dashboard-users"
                        className={`block px-4 py-2 rounded ${pathname === "/dashboard/dashboard-users"
                            ? "bg-[#F46E21]"
                            : "hover:bg-[#F46E21] transition"
                            }`}
                    >
                        Users
                    </Link>
                </li>
                <li>
                    <Link
                        href="/dashboard/dashboard-shop"
                        className={`block px-4 py-2 rounded ${pathname === "/dashboard/dashboard-shop"
                            ? "bg-[#F46E21]"
                            : "hover:bg-[#F46E21] transition"
                            }`}
                    >
                        Shop Cards
                    </Link>
                </li>
            </ul>
        </div>
    );
}
