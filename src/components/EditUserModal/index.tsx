import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from 'js-cookie';

interface User {
    _id: string;
    username: string;
    email: string;
    isAdmin: boolean;
}

interface EditUserModalProps {
    userId: string;
    onClose: () => void;
    onSave: (updatedUser: User) => void;
}

const EditUserModal: React.FC<EditUserModalProps> = ({ userId, onClose, onSave }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/v1/auth/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${Cookies.get("userToken")}`,
                    },
                });
                setUser(response.data.data);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        fetchUser();
    }, [userId]);

    const handleSave = () => {
        if (user) {
            onSave(user);
            onClose();
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (user) {
            setUser({ ...user, [name]: value });
        }
    };
    console.log(FormData);

    if (!user) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-1/3">
                <h3 className="text-lg font-semibold mb-4">Edit User</h3>
                <div className="mb-4">
                    <label className="block mb-2">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Admin</label>
                    <select
                        name="isAdmin"
                        value={user.isAdmin ? "true" : "false"}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
                <div className="flex justify-between">
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        Cancel
                    </button>
                    <button onClick={handleSave} className="text-blue-500 hover:text-blue-700">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditUserModal;
