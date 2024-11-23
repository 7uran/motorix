"use client";
import { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import loginBg from '../../../../assets/login-page-bg.png';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Comment {
    _id: string;
    username: string;
    content: string;
    date: string;
}

interface Blog {
    _id: string;
    title: string;
    content: string;
    image: string;
    comments: Comment[];
    slugImgs: { [key: string]: string };
}

export default function Page() {
    const [blog, setBlog] = useState<Blog | null>(null);
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState<string>("");
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [loading, setLoading] = useState(true);
    const [updatedTitle, setUpdatedTitle] = useState<string>("");
    const [updatedContent, setUpdatedContent] = useState<string>("");

    const [isEditing, setIsEditing] = useState({
        title: false,
        content: false,
    });

    const { slug } = useParams();
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const router = useRouter();

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedImage(e.target.files[0]);
        }
    };

    const updateImage = async () => {
        if (!selectedImage) {
            toast.error("Please select an image to upload.");
            return;
        }

        const formData = new FormData();
        formData.append("image", selectedImage);

        try {
            const response = await axios.put(
                `http://localhost:3001/api/v1/blogs/${id}/image`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            setBlog({
                ...blog!,
                image: response.data.image,
            });

            setSelectedImage(null);
            toast.success("Image updated successfully!");
        } catch (error) {
            console.error("Error updating image", error);
            toast.error("Failed to update image.");
        }
    };
    useEffect(() => {
        if (id) {
            const fetchBlogData = async () => {
                try {
                    const response = await axios.get(`http://localhost:3001/api/v1/blogs/${id}`);
                    setBlog(response.data);
                    setComments(response.data.comments);
                    setUpdatedTitle(response.data.title);
                    setUpdatedContent(response.data.content);
                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching blog data", error);
                    setLoading(false);
                    toast.error("Failed to load blog data.");
                }
            };
            fetchBlogData();
        }
    }, [id]);

    const addComment = async () => {
        try {
            if (newComment.trim()) {
                const response = await axios.post(
                    `http://localhost:3001/api/v1/blogs/${id}/comments`,
                    { username: "User", content: newComment }
                );
                setBlog({
                    ...response.data,
                    comments: response.data.comments,
                });
                setComments(response.data.comments);
                setNewComment("");
                toast.success("Comment added successfully!");
            }
        } catch (error) {
            console.error("Error adding comment", error);
            toast.error("Failed to add comment.");
        }
    };

    const deleteComment = async (commentId: string) => {
        try {
            const response = await axios.delete(
                `http://localhost:3001/api/v1/blogs/${id}/comments/${commentId}`
            );
            setBlog({
                ...response.data,
                comments: response.data.comments,
            });
            setComments(response.data.comments);
            toast.success("Comment deleted successfully!");
        } catch (error) {
            console.error("Error deleting comment", error);
            toast.error("Failed to delete comment.");
        }
    };

    const deleteBlog = async () => {
        try {
            await axios.delete(`http://localhost:3001/api/v1/blogs/${id}`);
            router.push("/");
            toast.success("Blog deleted successfully!");
        } catch (error) {
            console.error("Error deleting blog", error);
            toast.error("Failed to delete blog.");
        }
    };
    const updateBlog = async () => {
        try {

            const updatedBlog = new FormData();
            updatedBlog.append("title", updatedTitle);
            updatedBlog.append("content", updatedContent);

            if (selectedImage) {
                updatedBlog.append("image", selectedImage);
            }

            const response = await axios.put(`http://localhost:3001/api/v1/blogs/${id}`, updatedBlog, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            setBlog({
                ...response.data,
                comments: blog?.comments || [],
            });

            setIsEditing({ title: false, content: false });
            setSelectedImage(null);
            toast.success("Blog updated successfully!");
            location.reload();
        } catch (error) {
            console.error("Error updating blog", error);
            toast.error("Failed to update blog.");
        }
    };


    const handleGoBack = () => {
        router.back();
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen text-xl text-indigo-600">Loading...</div>;
    }

    if (!blog) {
        return <div className="text-center text-xl mt-10 text-red-600">Blog not found</div>;
    }

    return (
        <div style={{ backgroundImage: `url(${loginBg.src})` }} className="bg-cover bg-center bg-fixed min-h-screen py-12 px-4 ">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl">




                <button
                    onClick={handleGoBack}
                    className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-6 rounded-lg transition-all duration-300 mb-6"
                >
                    Go Back
                </button>

                <div className="mb-8">
                    {isEditing.title ? (
                        <input
                            type="text"
                            value={updatedTitle}
                            onChange={(e) => setUpdatedTitle(e.target.value)}
                            className="text-4xl font-extrabold text-gray-900 w-full p-4 rounded-lg border-2 border-gray-300 shadow-md"
                            placeholder="Edit Title"
                        />
                    ) : (
                        <h1
                            onClick={() => setIsEditing({ ...isEditing, title: true })}
                            className="text-4xl font-extrabold text-gray-900 hover:text-[#F56E21] transition-all duration-300 cursor-pointer"
                        >
                            {blog.title}
                        </h1>
                    )}

                    <div className="mt-6">
                        {isEditing.content ? (
                            <textarea
                                value={updatedContent}
                                onChange={(e) => setUpdatedContent(e.target.value)}
                                className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-md"
                                rows={6}
                                placeholder="Edit blog content"
                            />
                        ) : (
                            <p
                                onClick={() => setIsEditing({ ...isEditing, content: true })}
                                className="text-lg text-gray-800 cursor-pointer hover:text-[#F56E21] transition duration-300"
                            >
                                {blog.content}
                            </p>
                        )}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="text-2xl font-semibold text-gray-800">Blog Image</h3>
                    <img
                        src={`http://localhost:3001/${blog.image}`}
                        alt="Blog Image"
                        className="w-full h-72 object-cover rounded-3xl mt-6 shadow-lg"
                    />
                    <div className="mt-6">
                        <h3 className="text-2xl font-semibold text-gray-800">Update Blog Image</h3>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="mt-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                    </div>


                </div>

                <div className="mt-6 flex gap-4">
                    <button
                        onClick={updateBlog}
                        className="text-white bg-[#F56E21] hover:bg-[#F67C2D] py-2 px-6 rounded-lg transition-all duration-300"
                    >
                        Update Blog
                    </button>
                    <button
                        onClick={deleteBlog}
                        className="text-white bg-red-600 hover:bg-red-700 py-2 px-6 rounded-lg transition-all duration-300"
                    >
                        Delete Blog
                    </button>
                </div>

                <div className="mt-8">
                    <h3 className="text-2xl font-semibold text-gray-800">Comments</h3>
                    <div className="mt-4 space-y-6">
                        {comments.length ? (
                            <ul className="space-y-4">
                                {comments.map((comment) => (
                                    <li key={comment._id} className="p-6 border border-gray-200 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                                                {comment.username.slice(0, 1)}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-800">{comment.username}</p>
                                                <p className="text-sm text-gray-400">{comment.date}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 mt-4">{comment.content}</p>
                                        <button
                                            onClick={() => deleteComment(comment._id)}
                                            className="text-white bg-red-600 hover:bg-red-700 mt-4 py-2 px-4 rounded-lg"
                                        >
                                            Delete Comment
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500">No comments yet.</p>
                        )}
                    </div>

                    <div className="mt-6">
                        <textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-md"
                            rows={4}
                            placeholder="Add a comment"
                        />
                        <button
                            onClick={addComment}
                            className="mt-4 text-white bg-[#F56E21] hover:bg-[#F67C2D] py-2 px-6 rounded-lg transition-all duration-300"
                        >
                            Add Comment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
