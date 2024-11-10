"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";
import PageBanner from "@/components/PageBanner";
import { getData } from "@/utils/api";
import { BlogProps } from "@/types/type";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";
import { LuDot } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { BsDot } from "react-icons/bs";
import MiniBlogCard from "@/components/MiniBlogCard";
import Tag from "@/components/Tag";
import Image from "next/image";
import BlogSidebar from "@/components/BlogSidebar";

export default function Blog() {
    const [blogs, setBlogs] = useState<BlogProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const ITEMS_PER_PAGE = 5;

    const fetchBlogs = async (page: number) => {
        try {
            setLoading(true);
            const result = await getData(
                `http://localhost:3001/api/v1/blogs?offset=${(page - 1) * ITEMS_PER_PAGE}&limit=${ITEMS_PER_PAGE}`
            );
            console.log(result);
            if (result && result.blogs) {
                setBlogs(result.blogs);
                setTotalCount(result.totalCount || 0);
            } else {
                setError("Error: Invalid blog data");
            }
        } catch (error) {
            setError("Error fetching data");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs(currentPage);
    }, [currentPage]);

    const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    if (loading) {
        return <div className="min-h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="min-h-screen flex items-center justify-center">{error}</div>;
    }

    return (
        <div className="min-h-screen">
            <PageBanner title="Blog – List" />
            <div className="max-w-[1293px] mx-auto py-40 flex md:flex-row flex-col justify-center md:justify-between">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col  gap-6">
                        {blogs?.length > 0 ? (
                            blogs.map((blog) => (
                                <BlogCard
                                    _id={blog._id}
                                    key={blog._id}
                                    title={blog.title}
                                    img={blog.image}
                                    content={blog.content}
                                    commentCount={blog.comments?.length || 0}
                                />
                            ))
                        ) : (
                            <p>No blogs available</p>
                        )}
                    </div>
                    <div className="flex gap-2 ">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`border-gray-400 flex items-center justify-center font-medium transition duration-300 border rounded-full w-[52px] h-[52px] ${currentPage === 1 ? "hidden" : "hover:bg-white"
                                }`}
                        >
                            <FaArrowLeftLong />
                        </button>
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={`border-gray-400 font-medium transition duration-300 border rounded-full w-[52px] h-[52px] ${currentPage === index + 1 ? "bg-black text-white" : "hover:bg-white"
                                    }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`flex items-center justify-center border-gray-400 font-medium transition duration-300 border rounded-full w-[52px] h-[52px] ${currentPage === totalPages ? "hidden" : "hover:bg-white"
                                }`}
                        >
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>
                <BlogSidebar />
            </div>
        </div>
    );
}
