import Accordion from "@/components/Accordion";
import AccordionGroup from "@/components/Accordion";
import GetQuote from "@/components/GetQuote";
import PageBanner from "@/components/PageBanner";
import Image from "next/image";

export default function FaqsPage() {
    return (
        <>
            <div className="min-h-screen">
                <PageBanner title="FAQs" />
                <section className="max-w-[1293px] mx-auto py-40">
                    <div className="flex gap-36 items-center md:flex-nowrap flex-wrap">
                        <div><Image src={"https://motorix.themerex.net/wp-content/uploads/2024/01/img-89-copyright.jpg"} alt="" width={520} height={727} /></div>
                        <div className="md:w-1/2 flex gap-10 flex-col">
                            <div>
                                <p className="uppercase font-medium">Questions & Answers</p>
                                <p className="w-[510px] text-6xl font-medium">Frequently asked service questions</p>

                            </div>
                            <div className="w-full">
                                <Accordion title="How often should I change oil?" content="Sed ut perspiciatis unde omnis iste natus error sit voluptatemiu accusantiumus doloremques laudantium, totam rem aperi." />
                                <Accordion title="When should the tires be changed?" content="Sed ut perspiciatis unde omnis iste natus error sit voluptatemiu accusantiumus doloremques laudantium, totam rem aperi." />
                                <Accordion title="When should I replace the car battery?" content="Sed ut perspiciatis unde omnis iste natus error sit voluptatemiu accusantiumus doloremques laudantium, totam rem aperi." />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <GetQuote />
        </>
    );
}   