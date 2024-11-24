"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { notFound, useSearchParams } from "next/navigation";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { getData } from "@/utils/api";
import { Product, ProductCardProps, RelatedProductsProps } from "@/types/type";
import { IoIosHeartEmpty } from "react-icons/io";
import Accordion from "@/components/Accordion";
import { toast } from "react-toastify";
import axios from "axios";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";

export default function Page() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState<Product | null>(null);
    const [products, setProducts] = useState<RelatedProductsProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [rating, setRating] = useState<number | null>(null);
    const [review, setReview] = useState("");
    const [name, setName] = useState("");
    const router = useRouter();

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(Number(e.target.value));
    };
    const handleAddToWishlist = () => {
        if (product) {
            const productData = {
                id: product._id,
                name: product.name,
                price: product.price,
                image: product.image,
            };

            const currentWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");


            const existingProductIndex = currentWishlist.findIndex(
                (item: { id: string }) => item.id === product._id
            );

            if (existingProductIndex === -1) {
                currentWishlist.push(productData);
                localStorage.setItem("wishlist", JSON.stringify(currentWishlist));
                toast.success(`${product.name} added to wishlist!`);
            } else {
                toast.info(`${product.name} is already in your wishlist.`);
            }
        }
    };

    const handleAddToCart = () => {
        if (quantity <= 0) {
            toast.error("Please select a valid quantity.");
            return;
        }
        if (product) {
            const productData = {
                id: product._id,
                title: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity,
            };

            const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");

            const existingProductIndex = currentCart.findIndex(
                (item: { id: string }) => item.id === product._id
            );

            if (existingProductIndex !== -1) {
                currentCart[existingProductIndex].quantity += quantity;
            } else {
                currentCart.push(productData);
            }

            localStorage.setItem("cart", JSON.stringify(currentCart));
            toast.success(`${product.name} added to basket!`);
        }
    };

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                try {
                    setLoading(true);
                    const { data } = await axios.get(`http://localhost:3001/api/v1/shopCards/${id}`);
                    setProduct(data);
                } catch (err) {
                    setError("Failed to load product data");
                } finally {
                    setLoading(false);
                }
            };
            fetchProduct();
        }
    }, [id]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/v1/shopCards');
                const productsArray = response.data?.shopCards || [];
                if (productsArray.length === 0) {
                    throw new Error('No products found.');
                }
                const shuffled = productsArray.sort(() => 0.5 - Math.random());
                setProducts(shuffled.slice(0, Math.min(3, shuffled.length)));
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.error('Error fetching related products:', error.message);
                } else {
                    console.error('An unknown error occurred:', error);
                }
            }
        };

        fetchProducts();
    }, []);
    useEffect(() => {
        if (!loading && !product) {
            router.push("/error");
        }
    }, [product, loading, router]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!name || !review || !rating) {
            toast.error("Please fill all required fields.");
            return;
        }

        try {
            const response = await axios.post(
                `http://localhost:3001/api/v1/shopCards/${id}/comments`,
                { publisher: name, content: review, rating },
                { headers: { "Content-Type": "application/json" } }
            );

            if (response.status === 200 || response.status === 201) {
                toast.success("Comment posted successfully!");
                location.reload();
            } else {
                throw new Error("Comment not posted");
            }
        } catch (error) {
            toast.error("Error posting comment!");
        }
    };

    if (error) {
        return <div className="text-center py-16 text-red-500">{error}</div>;
    }

    if (!product) {
        return (
            <div className="w-full min-h-screen">
                <Loader />
            </div>
        );
    }

    const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(product.price);

    const averageRating =
        product.comments.length > 0
            ? (
                product.comments.reduce((acc, comment) => acc + comment.rating, 0) /
                product.comments.length
            ).toFixed(2)
            : "0.00";

    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-[1291px] mx-auto flex py-28 gap-16">
                <div>
                    <Image
                        alt={product.name}
                        width={722}
                        height={722}
                        src={`http://localhost:3001/${product.image}`}
                    />
                </div>
                <div className="w-[507px] flex flex-col gap-3">
                    <p className="text-lg text-stone-500">
                        Home / {product.category} / {product.name}
                    </p>
                    <h1 className="text-4xl font-medium mt-2">{product.name}</h1>
                    <p className="text-stone-500 mt-1">{product.brand}</p>
                    <div className="mt-4 flex justify-between items-center w-full">
                        <p className="text-main text-2xl">{formattedPrice}</p>
                        <div className="flex gap-1 mt-2 text-sm">
                            {Array(Math.floor(product.rating))
                                .fill(0)
                                .map((_, index) => (
                                    <FaStar key={index} className="text-yellow-400" />
                                ))}
                            {product.rating % 1 !== 0 && <FaStarHalfAlt className="text-yellow-400" />}
                        </div>
                    </div>
                    <span className="text-lg text-stone-500">
                        or 4 interest-free installments of $40 USD by Afterpay.
                    </span>
                    <div className="flex items-center gap-2">
                        <input
                            type="number"
                            placeholder="1"
                            value={quantity}
                            onChange={handleQuantityChange}
                            min="1"
                            className="w-28 h-12 border text-center outline-none bg-transparent border-gray-400 rounded-sm"
                        />
                        <button
                            onClick={handleAddToCart}
                            className="bg-main text-white font-medium uppercase h-12 w-36 hover:bg-orange-600 transition duration-300"
                        >
                            Buy now
                        </button>
                        <button
                            onClick={handleAddToWishlist}
                            className="bg-white shadow-md w-12 h-12 flex items-center justify-center hover:text-main transition duration-300 rounded-full text-2xl"
                        >
                            <IoIosHeartEmpty />
                        </button>
                    </div>

                    <p className="text-xl font-medium">Guaranteed safe checkout</p>
                    <div className="flex gap-2">
                        <button className="border hover:border-black transition duration-300">
                            <Image alt="" width={54} height={39} src={"https://motorix.themerex.net/wp-content/uploads/2024/01/p_s_1-copyright.png"} />
                        </button>
                        <button className="border hover:border-black transition duration-300">
                            <Image alt="" width={54} height={39} src={"https://motorix.themerex.net/wp-content/uploads/2024/01/p_s_2-copyright.png"} />
                        </button>
                        <button className="border hover:border-black transition duration-300">
                            <Image alt="" width={54} height={39} src={"https://motorix.themerex.net/wp-content/uploads/2024/01/p_s_3-copyright.png"} />
                        </button>
                        <button className="border hover:border-black transition duration-300">
                            <Image alt="" width={54} height={39} src={"https://motorix.themerex.net/wp-content/uploads/2024/01/p_s_4-copyright.png"} />
                        </button>
                    </div>
                    <Accordion title="Description" content={product.description} />
                    <Accordion
                        title="Delivery Info"
                        content={
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    {product.comments.length > 0 ? (
                                        <>
                                            <p className="font-medium text-black">Average rating</p>
                                            <p className="text-5xl text-main">{averageRating}</p>
                                            <div className="flex text-sm gap-1">
                                                {Array(Math.floor(Number(averageRating)))
                                                    .fill(0)
                                                    .map((_, index) => (
                                                        <FaStar key={index} className="text-yellow-400" />
                                                    ))}
                                                {Number(averageRating) % 1 !== 0 && (
                                                    <FaStarHalfAlt className="text-yellow-400" />
                                                )}
                                            </div>
                                            <p>
                                                {product.comments.length} review{product.comments.length > 1 ? 's' : ''}
                                            </p>

                                            {['5', '4', '3', '2', '1'].map((rating) => {
                                                const ratingCount = product.comments.filter(
                                                    (comment) => comment.rating === parseInt(rating)
                                                ).length;
                                                const percentage =
                                                    product.comments.length > 0
                                                        ? (ratingCount / product.comments.length) * 100
                                                        : 0;

                                                return (
                                                    <div key={rating} className="flex items-center justify-between mt-2 gap-2">
                                                        <div className="flex items-center gap-6 w-full">
                                                            <p className="text-stone-500 w-16">{rating} stars</p>
                                                            <div className="w-full bg-gray-200 h-1.5">
                                                                <div
                                                                    className="bg-main h-1.5"
                                                                    style={{
                                                                        width: `${percentage}%`,
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                        <p className="text-stone-500 text-lg">{Math.round(percentage)}%</p>
                                                    </div>
                                                );
                                            })}
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </div>

                                <div className="flex flex-col gap-4">
                                    <span className="text-xl text-black font-medium">
                                        {product.comments.length} review{product.comments.length > 1 ? 's' : ''} for{' '}
                                        {product.name}
                                    </span>

                                    {product.comments.length > 0 ? (
                                        product.comments.map((comment, index) => (
                                            <div key={index} className="flex gap-5">
                                                <div>
                                                    <Image
                                                        className="rounded-full"
                                                        alt=""
                                                        height={60}
                                                        width={60}
                                                        src={
                                                            'https://secure.gravatar.com/avatar/b79b28b41492262d0932be1d95b4bb2d?s=90&d=mm&r=g'
                                                        }
                                                    />
                                                </div>

                                                <div className="flex flex-col gap-2">
                                                    <p className="flex gap-1 text-black font-medium items-center">
                                                        {comment.publisher} -{' '}
                                                        <span className="font-thin text-sm text-stone-500">{'Dec 7, 2023'}</span>
                                                    </p>
                                                    <p className="text-lg">{comment.content}</p>
                                                    <div className="flex gap-1 text-sm">
                                                        {Array(Math.floor(comment.rating))
                                                            .fill(0)
                                                            .map((_, index) => (
                                                                <FaStar key={index} className="text-yellow-400" />
                                                            ))}
                                                        {comment.rating % 1 !== 0 && <FaStarHalfAlt className="text-yellow-400" />}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-500">There are no reviews yet.</p>
                                    )}

                                    <div className="flex flex-col gap-6">
                                        <p className="text-xl text-black font-medium">Add a review</p>
                                        <p className="text-lg">Your email address will not be published. Required fields are marked *</p>
                                        <div className="flex flex-col gap-3">
                                            <span className="text-black">Name *</span>
                                            <input
                                                type="text"
                                                className="outline-none border-b"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <span className="text-black">Email *</span>
                                            <input
                                                type="email"
                                                className="outline-none border-b"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <span className="text-black">Rating *</span>
                                            <div className="flex gap-2 text-lg text-yellow-400">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <FaStar
                                                        key={star}
                                                        className={`cursor-pointer ${star <= (rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
                                                        onClick={() => setRating(star)}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-3">
                                            <span className="text-black">Your Review *</span>
                                            <textarea
                                                className="outline-none border-b p-2"
                                                value={review}
                                                onChange={(e) => setReview(e.target.value)}
                                            />
                                        </div>
                                        <button className="bg-main text-white px-8 py-3 mt-4" onClick={handleSubmit}>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        }
                    />

                </div>
            </div>
            <div className="max-w-[1291px] mx-auto flex flex-col py-28 gap-16">
                <h1 className="text-5xl font-medium">Related products</h1>
                <div className="flex  flex-wrap justify-between">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.2
                            }}
                            viewport={{ once: true }}
                            className="w-fit"
                        >
                            <ProductCard
                                id={product._id}
                                image={product.image}
                                title={product.name}
                                rating={product.rating}
                                price={product.price}
                                url={`/shop/product?id=${product._id}`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
