"use client";
import Header from "../header/header";
import Footer from "../footer/footer";
import { usePathname } from "next/navigation";
import GoUpButton from "@/components/GoUpButton";
import HomePageFooter from "../HomePageFooter/homePageFooter";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const pathname = usePathname();
    const pagesWithHeaderFooter = ['/wheels-and-tires', '/shop', '/faqs', '/pricing', '/contact', '/blog'];
    const showHeaderFooter = pagesWithHeaderFooter.includes(pathname) || pathname.startsWith('/our-team');

    return (
        <main>
            {showHeaderFooter && <Header />}
            {children}
            {showHeaderFooter && (
                pathname === '/wheels-and-tires' ? <HomePageFooter /> : <Footer />
            )}
            <GoUpButton />
        </main>
    );
};

export default Layout;
