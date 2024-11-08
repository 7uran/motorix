"use client";
import GetQuote from "@/components/GetQuote";
import PageBanner from "@/components/PageBanner";
import TeamCard from "@/components/TeamCard";
import TeamCardSkeleton from "@/components/TeamCardSkeleton";
import { TeamMember } from "@/types/type";
import { getData } from "@/utils/api";
import { useEffect, useState } from "react";

export default function OurTeam() {
    const [data, setData] = useState<TeamMember[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getData("http://localhost:3001/api/v1/teams");

                if (result && result.success && Array.isArray(result.teams)) {
                    setData(result.teams);
                } else {
                    setError("Unexpected data format.");
                }
            } catch (error) {
                setError("Error fetching data.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
0
    if (error) return <div>{error}</div>;

    return (
        <>
            <div className="min-h-screen">
                <PageBanner title="Our Team" />
                <section className="max-w-[1293px] mx-auto py-40">
                    <div className="flex flex-wrap justify-center md:justify-between">

                        {loading
                            ? Array(6)
                                .fill(null)
                                .map((_, index) => (
                                    <TeamCardSkeleton key={index} />
                                ))
                            : data?.map((member: TeamMember) => (
                                <TeamCard
                                    key={member._id}
                                    img={`http://localhost:3001${member.image}`}
                                    name={member.name}
                                    job={member.job}
                                    id={member._id}
                                />
                            ))}
                    </div>
                </section>
            </div>
            <GetQuote />
        </>
    );
}
