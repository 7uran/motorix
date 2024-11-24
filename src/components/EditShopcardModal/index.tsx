import axios from "axios";
import React, { useState } from "react";

interface EditModalProps {
    formData: any;
    setFormData: React.Dispatch<React.SetStateAction<any>>;
    handleSave: () => Promise<void>;
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
    handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    productId: String;
}

const EditModal: React.FC<EditModalProps> = ({
    formData,
    setFormData,
    handleSave,
    setIsEditing,
    handleImageChange,
    productId
}) => {
    const [newComment, setNewComment] = useState("");
    console.log(productId);

    const handleDeleteComment = async (commentId: string) => {
        try {

            await axios.delete(`http://localhost:3001/api/v1/shopCards/${productId}/comments/${commentId}`);

            const updatedComments = formData.comments.filter((comment: any) => comment._id !== commentId);
            setFormData({ ...formData, comments: updatedComments });
        } catch (error) {
            console.error("Failed to delete comment", error);
        }
    };

    console.log(formData);

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit Shop Card</h2>
                <div className="space-y-4">
                    <div>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Name"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            placeholder="Category"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            value={formData.price}
                            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                            placeholder="Price"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            placeholder="Description"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Upload Image</label>
                        <input
                            type="file"
                            onChange={handleImageChange}
                            accept="image/*"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {formData.image && (
                            <div className="mt-4">
                                <img
                                    src={`http://localhost:3001/${formData.image}`}
                                    alt="Preview"
                                    className="w-32 h-32 object-cover rounded-lg"
                                />
                            </div>
                        )}
                    </div>


                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Comments</h3>
                        <div className="space-y-2">
                            {formData.comments.map((comment: any) => (
                                <div key={comment._id} className="flex justify-between items-center p-3 border border-gray-300 rounded-md">
                                    <div className="flex flex-col">
                                        <span className="font-semibold">{comment.publisher}</span>
                                        <p className="text-gray-700">{comment.content}</p>
                                    </div>
                                    <button
                                        onClick={() => handleDeleteComment(comment._id)}
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        Delete Comment
                                    </button>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                    <button
                        onClick={() => setIsEditing(false)}
                        className="bg-gray-500 text-white py-2 px-6 rounded-md hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
