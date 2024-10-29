"use client"
import { useEffect, useState } from "react";
import { getData } from "../../../utils/api";

export default function Page() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getData("http://localhost:3001/api/v1/teams");
            if (result) {
                setData(result);
            } else {
                setError("Error");
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }
    console.log(data);

    return (
        <div className="min-h-screen max-w-[1293px] mx-auto py-32">
            <div>
                <p className="uppercase font-medium"></p>
                <h1>Tom Jones</h1>
            </div>
        </div>
    );
}
