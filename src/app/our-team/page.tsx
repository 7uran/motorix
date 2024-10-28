import PageBanner from "@/components/PageBanner";
import TeamCard from "@/components/TeamCard";
import { teamCardData } from "@/static/mockdb";


export default function OurTeam() {
    return (
        <div className="min-h-screen bg-[#F0EEEF]  ">
            <div>
                <PageBanner title="Our Team" />
            </div>
            <section className="max-w-[1293px] mx-auto py-40 ">
                <div className="flex flex-wrap justify-between ">
                    {
                        teamCardData.map((member, index) => (
                            <TeamCard key={index} img={member.img} name={member.name} job={member.job} />
                        ))
                    }

                </div>
            </section>

        </div>
    )
}
