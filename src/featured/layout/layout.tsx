"use client";
import Header from "../header/header";
import Footer from "../footer";
import { usePathname } from "next/navigation";
import GoUpButton from "@/components/GoUpButton";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const pathname = usePathname();
    const showHeaderFooter = pathname === '/wheels-and-tires' || pathname === '/shop';

    return (
        <main>
            {showHeaderFooter && <Header />}
            {children}
            {showHeaderFooter && <Footer />}
            <GoUpButton />
        </main>
    );
};

export default Layout;
