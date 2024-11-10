"use client"
import React, { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";
import PageBanner from "@/components/PageBanner";
import { getData } from "@/utils/api";
import { BlogProps } from "@/types/type";

export default function Blog() {
    const [blogs, setBlogs] = useState<BlogProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const result = await getData("http://localhost:3001/api/v1/blogs");
                if (result) {
                    setBlogs(result);
                } else {
                    setError("Error: No blogs found");
                }
            } catch (error) {
                setError("Error fetching data");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return <div className="min-h-screen">Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="min-h-screen">
            <PageBanner title="Blog – List" />
            <div className="max-w-[1293px] mx-auto py-40 ">
                <div className="flex flex-col gap-10">
                    {blogs.length > 0 ? (
                        blogs.map((blog) => (
                            <BlogCard
                                _id={blog._id}
                                key={blog._id}
                                title={blog.title}
                                img={blog.image}
                                content={blog.content}
                                commentCount={blog.comments.length}
                            />
                        ))
                    ) : (
                        <p>No blogs available</p>
                    )}
                </div>
                <div>

                </div>

            </div>
        </div>
    );
}
