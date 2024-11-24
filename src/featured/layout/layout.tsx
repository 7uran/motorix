"use client";

import Header from "../header/header";
import Footer from "../footer/footer";
import { usePathname, useRouter } from "next/navigation";
import GoUpButton from "@/components/GoUpButton";
import HomePageFooter from "../HomePageFooter/homePageFooter";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const pathname = usePathname();
    const router = useRouter();

    const pagesWithHeaderFooter = ['/wheels-and-tires', '/shop', '/faqs', '/pricing', '/contact', '/blog', '/checkout', '/cart', '/wishlist'];
    const authPages = ['/login', '/signup', '/admin', '/success', '/fail'];
    const showHeaderFooter = pagesWithHeaderFooter.includes(pathname) || pathname.startsWith('/our-team') || pathname.includes('/blog/') || pathname.includes('/shop/');

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, [pathname]);

    useEffect(() => {
        if (!showHeaderFooter && !authPages.some(page => pathname.startsWith(page)) && pathname !== "/error") {
            router.push("/error");
        }
    }, [pathname, showHeaderFooter, authPages, router]);

    return (
        <main>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {showHeaderFooter && <Header />}
                    {children}
                    {showHeaderFooter && (
                        pathname === '/wheels-and-tires' ? <HomePageFooter /> : <Footer />
                    )}
                    <GoUpButton />
                </>
            )}
        </main>
    );
};

export default Layout;
