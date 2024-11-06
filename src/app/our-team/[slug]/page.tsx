"use client";
import { useEffect, useState } from "react";
import { getData } from "../../../utils/api";
import Image from "next/image";
import ProgressBar from "@/components/Progressbar";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiDribbbleLogoFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { GiSmartphone } from "react-icons/gi";
import { CiUser } from "react-icons/ci";
import { SlPencil } from "react-icons/sl";
import { IoMdPaperPlane } from "react-icons/io";
import ContactForm from "@/components/ContactForm";

export default function Page() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [teamId, setTeamId] = useState<string | null>(null);

    // URL'deki 'id' parametresini al
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        setTeamId(id);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            if (teamId) {
                try {
                    const result = await getData(`http://localhost:3001/api/v1/teams/${teamId}`);
                    if (result) {
                        setData(result);
                    } else {
                        setError("Error: Team not found");
                    }
                } catch (error) {
                    setError("Error fetching data");
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [teamId]);

    if (loading) {
        return <div className="w-full h-screen flex items-center justify-center">

        </div>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    const team = data?.team;
    const imageUrl = `http://localhost:3001${team?.slugImg}`;

    return (
        <>
            <div className="min-h-screen flex flex-col gap-12 max-w-[1293px] mx-auto py-32">
                <div>
                    <p className="md:text-sm uppercase font-medium">{team?.job}</p>
                    <p className="text-4xl md:text-6xl font-medium">{team?.name}</p>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-wrap justify-between">
                        <div className="">
                            <Image width={633} height={633} className="" alt={team?.name} src={imageUrl} />
                        </div>
                        <div className="md:w-[46%] w-full md:-translate-y-6">
                            <div>
                                <p className="text-xl font-medium translate-y-6">Expertise</p>
                                <ProgressBar progress={team?.skills.expertise} />
                                <p className="text-xl font-medium translate-y-6">Efficiency</p>
                                <ProgressBar progress={team?.skills.efficiency} />
                                <p className="text-xl font-medium translate-y-6">Proficiency</p>
                                <ProgressBar progress={team?.skills.proficiency} />
                            </div>
                            <div className="md:w-[751px] md:h-[357px] bg-white right-0 absolute p-12 flex flex-wrap gap-4 justify-between">
                                <div className="flex gap-2">
                                    <p className="w-[280px] text-lg leading-8 text-stone-500 first-letter:text-6xl first-letter:text-black first-letter:font-medium first-letter:float-left">Qonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                                <div>
                                    <p className="w-[280px] text-lg leading-8 text-stone-500">Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                </div>
                                <div>
                                    <p className="w-[280px] text-lg leading-8 text-stone-500">Adipiscing elit, sed do eiusm consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit.</p>
                                </div>
                                <div>
                                    <p className="w-[280px] text-lg leading-8 text-stone-500">Consectetur adipiscing elit, sed do eiusm onsectetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 text-lg">
                        <button className="hover:-translate-y-2 transition duration-300 bg-white w-[45px] h-[45px] flex justify-center items-center rounded-full"><FaFacebookF /></button>
                        <button className="hover:-translate-y-2 transition duration-300 bg-white w-[45px] h-[45px] flex justify-center items-center rounded-full"><FaXTwitter /></button>
                        <button className="hover:-translate-y-2 transition duration-300 bg-white w-[45px] h-[45px] flex justify-center items-center rounded-full"><PiDribbbleLogoFill /></button>
                        <button className="hover:-translate-y-2 transition duration-300 bg-white w-[45px] h-[45px] flex justify-center items-center rounded-full"><FaInstagram /></button>
                    </div>
                </div>
            </div>

            <ContactForm />
        </>
    );
}
