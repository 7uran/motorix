"use client";
import { CiUser } from 'react-icons/ci';
import { IoKeyOutline } from 'react-icons/io5';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import registerBg from '../../assets/login-page-bg.png';
import { useRouter } from 'next/navigation';


const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match') 
        .required('Confirm password is required'),
});


export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const router = useRouter()
  
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const { username, email, password } = values;

                const response = await fetch('http://localhost:3001/api/v1/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, email, password }),
                });

                const data = await response.json();

                if (!response.ok) {
                    toast.error(data.message || 'Something went wrong');
                } else {
                    toast.success('Registration successful');
                    router.push("/login")
                }
            } catch (err) {
                toast.error('An error occurred while registering.');
            }
        },
    });

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prev) => !prev);
    };

    return (
        <div
            className="bg-cover bg-center w-full h-screen flex items-center justify-center bg-fixed"
            style={{ backgroundImage: `url(${registerBg.src})` }}
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
                        <div className="bg-white shadow-lg w-[415px] h-[592px] flex flex-col justify-center rounded-sm p-8 gap-6">
                            <h2 className="text-4xl font-semibold text-center text-[#F26515]">Register</h2>
                            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
                                <div>
                                    <div className="flex items-center relative">
                                        <CiUser className="text-2xl absolute left-3 text-stone-600" />
                                        <input
                                            type="text"
                                            name="username"
                                            value={formik.values.username}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            placeholder="Username"
                                            className="focus:placeholder:text-black placeholder:transition placeholder:duration-300 bg-transparent focus:border-b-black border-b-2 outline-none hover:border-b-black transition duration-300 w-full px-12 py-3 border-b-stone-300"
                                        />
                                    </div>
                                    {formik.touched.username && formik.errors.username && (
                                        <p className="text-red-500 text-sm">{formik.errors.username}</p>
                                    )}
                                </div>

                                <div>
                                    <div className="flex items-center relative">
                                        <CiUser className="text-2xl absolute left-3 text-stone-600" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            placeholder="Email"
                                            className="focus:placeholder:text-black placeholder:transition placeholder:duration-300 bg-transparent focus:border-b-black border-b-2 outline-none hover:border-b-black transition duration-300 w-full px-12 py-3 border-b-stone-300"
                                        />
                                    </div>
                                    {formik.touched.email && formik.errors.email && (
                                        <p className="text-red-500 text-sm">{formik.errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <div className="flex items-center relative">
                                        <IoKeyOutline className="text-2xl absolute left-3 text-stone-600" />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            value={formik.values.password}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            placeholder="Password"
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
                                    {formik.touched.password && formik.errors.password && (
                                        <p className="text-red-500 text-sm">{formik.errors.password}</p>
                                    )}
                                </div>

                                <div>
                                    <div className="flex items-center relative">
                                        <IoKeyOutline className="text-2xl absolute left-3 text-stone-600" />
                                        <input
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            name="confirmPassword"
                                            value={formik.values.confirmPassword}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            placeholder="Confirm Password"
                                            className="focus:placeholder:text-black placeholder:transition placeholder:duration-300 bg-transparent focus:border-b-black border-b-2 outline-none hover:border-b-black transition duration-300 w-full px-12 py-3 border-b-stone-300"
                                        />
                                        <button
                                            type="button"
                                            onClick={toggleConfirmPasswordVisibility}
                                            className="absolute right-3 text-stone-600"
                                        >
                                            {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                                        </button>
                                    </div>
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                        <p className="text-red-500 text-sm">{formik.errors.confirmPassword}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 flex items-center justify-center uppercase font-semibold text-lg text-white bg-[#F26515] hover:bg-[#e25b14] focus:outline-none focus:ring-2 focus:ring-[#F26515]"
                                    disabled={formik.isSubmitting}
                                >
                                    {formik.isSubmitting ? <Image className="animate-spin" src={"https://static.thenounproject.com/png/119081-512.png"} alt="Loading..." width={30} height={30} />
                                        : 'Register'}
                                </button>
                            </form>

                            <div className="text-center">
                                <span className="text-sm text-black">Already have an account? </span>
                                <a href="/login" className="text-sm text-[#F26515] hover:underline">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
