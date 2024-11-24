"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Sidebar from "@/components/AdminSidebar";
import EditModal from "@/components/EditShopcardModal";

export default function DashboardShop() {
    const [shopCards, setShopCards] = useState<any[]>([]);
    const [formData, setFormData] = useState<any>({
        name: "",
        category: "",
        price: "",
        description: "",
        brand: "",
        rating: 5,
        image: null,
        comments: [],
    });
    const [isEditing, setIsEditing] = useState(false);
    const [selectedCard, setSelectedCard] = useState<any>(null);
    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        const fetchShopCards = async () => {
            const response = await axios.get("http://localhost:3001/api/v1/shopCards");
            setShopCards(response.data.shopCards);
        };
        fetchShopCards();
    }, []);

    const handleEditClick = (card: any) => {
        setSelectedCard(card);
        setFormData({
            name: card.name,
            category: card.category,
            price: card.price,
            description: card.description,
            brand: card.brand,
            rating: card.rating,
            image: card.image,
            comments: card.comments || [],
        });
        setIsEditing(true);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({
                ...formData,
                image: e.target.files[0],
            });
        }
    };

    const handleSave = async () => {
        const data = new FormData();
        data.append("name", formData.name);
        data.append("category", formData.category);
        data.append("price", formData.price);
        data.append("description", formData.description);
        data.append("brand", formData.brand);
        data.append("rating", formData.rating);

        if (formData.comments.length > 0) {
            data.append("comments", JSON.stringify(formData.comments));
        }

        if (formData.image) {
            data.append("image", formData.image);
        }

        try {
            await axios.patch(`http://localhost:3001/api/v1/shopCards/${selectedCard._id}`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            toast.success("Card updated successfully!");
            setIsEditing(false);
        } catch (error) {
            toast.error("Failed to update card!");
        }
    };

    const handleDeleteCard = async (cardId: string) => {
        try {
            await axios.delete(`http://localhost:3001/api/v1/shopCards/${cardId}`);
            setShopCards(shopCards.filter(card => card._id !== cardId));
            toast.success("Card deleted successfully!");
        } catch (error) {
            toast.error("Failed to delete card!");
        }
    };

    const handleAddCard = async () => {
        const data = new FormData();
        data.append("name", formData.name);
        data.append("category", formData.category);
        data.append("price", formData.price);
        data.append("description", formData.description);
        data.append("brand", formData.brand);
        data.append("rating", formData.rating);

        if (formData.comments.length > 0) {
            data.append("comments", JSON.stringify(formData.comments));
        }

        if (formData.image) {
            data.append("image", formData.image);
        }

        try {
            await axios.post("http://localhost:3001/api/v1/shopCards", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            toast.success("Card added successfully!");
            setIsAdding(false);

            const response = await axios.get("http://localhost:3001/api/v1/shopCards");
            setShopCards(response.data.shopCards);
        } catch (error) {
            toast.error("Failed to add card!");
        }
    };
    

    return (
        <div className="flex bg-[#F0EEEF] min-h-screen">
            <div className="w-64 bg-white">
                <Sidebar />
            </div>
            <div className="flex-1 bg-[#F0EEEF] p-6">
                <h1 className="text-3xl font-bold mb-4 text-[#191919]">Shop Cards</h1>
                <button
                    onClick={() => setIsAdding(true)}
                    className="bg-indigo-600 text-white py-2 px-4 rounded-md mb-4"
                >
                    Add New Card
                </button>

                {shopCards.length === 0 ? (
                    <p>No shop cards available.</p>
                ) : (
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {shopCards.map((card) => (
                                <tr key={card._id}>
                                    <td>
                                        <img src={`http://localhost:3001/${card.image}`} alt={card.name} width="100" />
                                    </td>
                                    <td>{card.name}</td>
                                    <td>{card.category}</td>
                                    <td>{card.price}</td>
                                    <td>
                                        <button onClick={() => handleEditClick(card)}>Edit</button>
                                        <button
                                            onClick={() => handleDeleteCard(card._id)}
                                            className="ml-2 text-red-600 hover:text-red-800"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}

                {isEditing && (
                    <EditModal
                        formData={formData}
                        setFormData={setFormData}
                        handleSave={handleSave}
                        setIsEditing={setIsEditing}
                        handleImageChange={handleImageChange}
                        productId={selectedCard?._id}
                    />

                )}

                {isAdding && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add New Shop Card</h2>
                            <div className="space-y-4">
                                <input
                                    type="text"

                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Name"
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                />
                                <input
                                    type="text"

                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    placeholder="Category"
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                />
                                <input
                                    type="number"

                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                    placeholder="Price"
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                />
                                <textarea

                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    placeholder="Description"
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                />
                                <input
                                    type="text"

                                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                                    placeholder="Brand"
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                />
                                <input
                                    type="number"

                                    onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                                    placeholder="Rating"
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                />
                                <input
                                    type="file"
                                    onChange={handleImageChange}
                                    className="w-full p-3 border border-gray-300 rounded-md"
                                />
                                <button
                                    onClick={handleAddCard}
                                    className="bg-indigo-600 text-white py-2 px-4 rounded-md mt-4"
                                >
                                    Add Card
                                </button>
                                <button
                                    onClick={() => setIsAdding(false)}
                                    className="bg-gray-500 text-white py-2 px-4 rounded-md mt-4"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
