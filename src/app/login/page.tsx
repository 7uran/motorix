"use client";
import { CiUser } from 'react-icons/ci';
import loginBg from '../../assets/login-page-bg.png';
import { IoKeyOutline } from 'react-icons/io5';
import Image from 'next/image';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import ButtonLoader from '@/components/ButtonLoader';

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
    const router = useRouter();

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSubmit = async (values: { email: string; password: string }) => {
        try {
            const response = await axios.post('http://localhost:3001/api/v1/auth/login', values);
            Cookies.set('userToken', response.data.token, { expires: 1 });
            Cookies.set('userEmail', response.data.data.email);
            Cookies.set('username', response.data.data.username);
            console.log(response.data.data.isAdmin);
            console.log(response);

            if (response.data.data.isAdmin === true) {
                Cookies.set('isAdmin', 'true', { expires: 1 });
            } else {
                Cookies.set('isAdmin', 'false', { expires: 1 });
            }

            setIsLoggedIn(true); // Mark login as successful
            router.push('/wheels-and-tires');
            toast.success("Login successful");
        } catch (err) {
            console.error('Login failed:', err);
            toast.error("Incorrect email or password");
        }
    };

    return (
        <div
            className="bg-cover bg-center w-full h-screen flex items-center justify-center bg-fixed"
            style={{ backgroundImage: `url(${loginBg.src})` }}
        >
            <div className="w-full h-full flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
                    <div className="flex flex-col justify-center items-center bg-black bg-opacity-60 p-6 gap-6 text-white">
                        <Image
                            src="https://motorix.themerex.net/wp-content/uploads/2024/01/logo-inverse.png"
                            alt="Logo"
                            width={300}
                            height={100}
                            className="object-contain"
                        />
                    </div>

                    <div className="flex justify-center items-center bg-opacity-90 p-6">
                        <div className="bg-white shadow-lg w-[415px] h-[492px] flex flex-col justify-center p-8 gap-6">
                            <h2 className="text-4xl font-semibold text-center text-[#F26515]">Login</h2>
                            <Formik
                                initialValues={{ email: '', password: '' }}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ values, handleChange, handleBlur, errors, touched, isSubmitting }) => (
                                    <Form className="flex flex-col gap-6">
                                        <div>
                                            <div className="flex items-center relative">
                                                <CiUser className="text-2xl absolute left-3 text-stone-600" />
                                                <Field
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className="focus:placeholder:text-black placeholder:transition placeholder:duration-300 bg-transparent focus:border-b-black border-b-2 outline-none hover:border-b-black transition duration-300 w-full px-12 py-3 border-b-stone-300"
                                                />
                                            </div>
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="text-red-500 text-sm"
                                            />
                                        </div>

                                        <div>
                                            <div className="flex items-center relative">
                                                <IoKeyOutline className="text-2xl absolute left-3 text-stone-600" />
                                                <Field
                                                    type={showPassword ? 'text' : 'password'}
                                                    name="password"
                                                    placeholder="Password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    className="focus:placeholder:text-black placeholder:transition placeholder:duration-300 bg-transparent focus:border-b-black border-b-2 outline-none hover:border-b-black transition duration-300 w-full px-12 py-3 border-b-stone-300"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={togglePasswordVisibility}
                                                    className="absolute right-3 text-stone-600"
                                                >
                                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                                </button>
                                            </div>
                                            <ErrorMessage
                                                name="password"
                                                component="div"
                                                className="text-red-500 text-sm"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full py-3 flex items-center justify-center uppercase font-semibold text-lg text-white bg-[#F26515] hover:bg-[#e25b14] focus:outline-none focus:ring-2 focus:ring-[#F26515]"
                                            disabled={isSubmitting || isLoggedIn}
                                        >
                                            {isSubmitting || isLoggedIn ? <ButtonLoader /> : 'Login'}
                                        </button>
                                    </Form>
                                )}
                            </Formik>

                            <div className="text-center">
                                <span className="text-sm text-black">Don't have an account? </span>
                                <a href="/signup" className="text-sm text-[#F26515] hover:underline">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
