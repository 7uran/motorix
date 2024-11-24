"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BlogCard from "@/components/BlogCard";
import Sidebar from "@/components/AdminSidebar";


type Blog = {
    _id: string;
    title: string;
    content: string;
    image: string;
    slugImgs: {
        img1: string;
        img2: string;
        img3: string;
    };
    comments: {
        username: string;
        content: string;
        date: string;
        _id: string;
    }[];
    createdAt: string;
    updatedAt: string;
    __v: number;
};

export default function DashboardBlog() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const pathname = usePathname();

    useEffect(() => {
        fetch("http://localhost:3001/api/v1/blogs")
            .then((res) => res.json())
            .then((data) => setBlogs(data.blogs))
            .catch((err) => console.error("Error fetching blogs:", err));
    }, []);

    return (
        <div className="flex bg-[#F0EEEF] min-h-screen">
            <Sidebar />

            <div className="flex flex-col ml-64 p-6  bg-[#F0EEEF]">
                <h1 className="text-3xl font-bold mb-4 text-[#191919]">Blog</h1>
                <div className="space-y-6">
                    {blogs.length === 0 ? (
                        <p>No blogs available</p>
                    ) : (
                        blogs.map((blog) => (
                            <BlogCard
                                key={blog._id}
                                _id={blog._id}
                                title={blog.title}
                                img={blog.image}
                                content={blog.content}
                                commentCount={blog.comments.length}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
