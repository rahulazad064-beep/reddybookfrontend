import react from "react";
import Navbar from "../component/navbar";
import CategoryBar from "../component/catogerybar";
import Layout from "../component/layout";
import { useEffect } from "react";

export default function Home() {

    useEffect(() => {
        async function get() {
            const res = await fetch("https://reddybookbackend.onrender.com/auth/health");
            const result = await res.json();
        }

        get();
    }, [])

    return (
        <div className='w-full h-full'>
            <Navbar />
            <CategoryBar />
            <Layout />
        </div>
    )
}