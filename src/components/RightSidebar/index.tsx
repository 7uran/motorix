import React from 'react';
import { IoMdClose } from 'react-icons/io';
import Cookies from 'js-cookie';

const RightSidebar = ({
    isOpen,
    toggleSidebar,
    userEmail,
    username,
}: {
    isOpen: boolean;
    toggleSidebar: () => void;
    userEmail: string | null;
    username: string | null;
}) => {

    const handleLogout = () => {
        Cookies.remove('userToken');
        Cookies.remove('userEmail');
        Cookies.remove('username');
        Cookies.remove('isAdmin');
        localStorage.removeItem('cart');
        localStorage.removeItem('wishlist');

        window.location.href = '/login';
    };


    const isAdmin = Cookies.get('isAdmin') === 'true';

    return (
        <div className={`fixed z-50 top-0 right-0 h-full w-80 bg-[#212020] text-white p-8 shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <button
                onClick={toggleSidebar}
                className="absolute top-4 right-4 text-white text-3xl"
            >
                <IoMdClose />
            </button>

            {userEmail && username ? (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Welcome, {username}!</h3>
                    <p className="text-sm text-gray-300">{userEmail}</p>
                </div>
            ) : (
                <p className="mt-4 text-red-500">User not logged in</p>
            )}

            <ul className="mt-8">
                {isAdmin && (
                    <li className="mb-4">
                        <a
                            href="/dashboard"
                            className="text-lg text-main hover:underline"
                        >
                            Go to Dashboard
                        </a>
                    </li>
                )}
                <li className="mb-4">
                    <button
                        onClick={handleLogout}
                        className="text-lg text-main hover:underline"
                    >
                        Log out
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default RightSidebar;
