import BlogCard from "@/components/BlogCard";
import PageBanner from "@/components/PageBanner";

export default function Blog() {
    return (
        <div className="min-h-screen">
            <PageBanner title="Blog – list" />
            <div className="max-w-[1293px] mx-auto py-40 ">
                <BlogCard />
            </div>
        </div>
    );
}