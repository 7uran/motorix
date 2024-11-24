"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import EditUserModal from "@/components/EditUserModal";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "@/components/AdminSidebar";


interface User {
    _id: string;
    username: string;
    email: string;
    isAdmin: boolean;
}

const UserList: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:3001/api/v1/auth/users", {
                    headers: {
                        Authorization: `Bearer ${Cookies.get("userToken")}`,
                    },
                });
                setUsers(response.data.data);
            } catch (err) {
                setError("Error fetching users.");
                toast.error("Error fetching users.");
            }
        };

        fetchUsers();
    }, []);

    const handleEdit = (userId: string) => {
        setSelectedUser(userId);
    };

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`http://localhost:3001/api/v1/auth/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get("userToken")}`,
                },
            });
            setUsers(users.filter((user) => user._id !== id));
            toast.success("User deleted successfully!");
        } catch (err) {
            setError("Error deleting user.");
            toast.error("Error deleting user.");
        }
    };

    const handleSave = async (updatedUser: User) => {
        try {
            const response = await axios.put(
                `http://localhost:3001/api/v1/auth/users/${updatedUser._id}`,
                updatedUser,
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get("userToken")}`,
                    },
                }
            );
            setUsers(
                users.map((user) =>
                    user._id === updatedUser._id ? response.data.data : user
                )
            );
            setSelectedUser(null);
            toast.success("User updated successfully!"); 
        } catch (err) {
            setError("Error updating user.");
            toast.error("Error updating user."); 
        }
    };

    return (
        <div className="flex">
       
            <Sidebar />

         
            <div className="ml-64 w-full p-6">
                <h2 className="text-3xl font-semibold text-gray-700">User List</h2>
                {error && <p className="text-red-500">{error}</p>}

                <div className="overflow-x-auto mt-6 bg-white rounded-lg shadow-md">
                    <table className="min-w-full text-left">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="py-3 px-4 font-semibold text-gray-600">Username</th>
                                <th className="py-3 px-4 font-semibold text-gray-600">Email</th>
                                <th className="py-3 px-4 font-semibold text-gray-600">Admin</th>
                                <th className="py-3 px-4 font-semibold text-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user._id} className="border-b hover:bg-gray-100">
                                    <td className="py-3 px-4">{user.username}</td>
                                    <td className="py-3 px-4">{user.email}</td>
                                    <td className="py-3 px-4">{user.isAdmin ? "Yes" : "No"}</td>
                                    <td className="py-3 px-4 flex space-x-4">
                                        <button
                                            className="text-blue-500 hover:text-blue-700"
                                            onClick={() => handleEdit(user._id)}
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            className="text-red-500 hover:text-red-700"
                                            onClick={() => handleDelete(user._id)}
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {selectedUser && (
                    <EditUserModal
                        userId={selectedUser}
                        onClose={() => setSelectedUser(null)}
                        onSave={handleSave}
                    />
                )}
            </div>
        </div>
    );
};

export default UserList;
