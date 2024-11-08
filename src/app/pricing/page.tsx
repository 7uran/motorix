import GetQuote from "@/components/GetQuote";
import PageBanner from "@/components/PageBanner";
import PaintProtection from "@/components/PaintProtection";
import PricingCard from "@/components/PricingCard";

export default function Pricing() {
    return (
        <>
            <div className="min-h-screen">
                <PageBanner title="Pricing" />
                <section className="max-w-[1293px] mx-auto py-40">
                    <div className="flex justify-center md:gap-0 gap-6 md:justify-between flex-wrap">
                        <PricingCard title="Express" price={20} isActive={false} />
                        <PricingCard title="Standard" price={35} isActive={true} />
                        <PricingCard title="Premium" price={70} isActive={false} />
                    </div>
                </section>
            </div>
            <GetQuote />
            <div>
                <div className="max-w-[1293px] mx-auto py-36 flex flex-col gap-10">
                    <div>
                        <p className="uppercase font-medium">Car coating</p>
                        <p className="text-6xl font-medium ">Automotive <br />paint protection</p>
                    </div>
                    <div className="border-t-2">
                        <PaintProtection title="Paint protection " index={1} />
                        <PaintProtection title="Ceramic coating " index={2} />
                        <PaintProtection title="Paint correction " index={3} />

                    </div>
                </div>
            </div >
        </>
    );
}