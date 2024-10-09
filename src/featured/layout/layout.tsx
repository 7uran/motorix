"use client";
import MouseFollower from "@/components/MouseFollower";
import Header from "../header/header";
import Footer from "../footer";
import { usePathname } from "next/navigation";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const pathname = usePathname();
    const showHeaderFooter = pathname === '/wheels-and-tires' || pathname === '/shop';

    return (
        <main>
            <MouseFollower />
            {showHeaderFooter && <Header />}
            {children}
            {showHeaderFooter && <Footer />}
        </main>
    );
};

export default Layout;
