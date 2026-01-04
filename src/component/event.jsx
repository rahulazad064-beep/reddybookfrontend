import React from "react";

const events = [
    "Cagliari V AC Milan",
    "Eibar V Mirandes",
    "Sydney Thunder V Hobart Hurricanes",
    "Australia V England",
    "Central Stags V Canterbury Kings",
];

export default function EventTicker() {
    return (
        <div className="w-full bg-black px-1 py-2">

            {/* TOP TICKER */}
            <div className="relative overflow-hidden">
                <div className="flex gap-3 animate-marquee whitespace-nowrap">

                    {/* POPULAR TAG */}
                    <div className="flex items-center gap-2 bg-red-700 text-white px-3 py-1 rounded-full font-semibold text-sm">
                        <div className="w-6 h-6 flex items-center justify-center rounded-full border border-white text-xs">
                            🔥
                        </div>
                        POPULAR
                    </div>

                    {/* EVENT TAGS */}
                    {[...events, ...events].map((item, index) => (
                        <div
                            key={index}
                            className="bg-red-700 text-white px-4 py-1 rounded-full font-semibold text-sm"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* SEARCH BAR */}
            <div className="mt-3 relative">
                <input
                    type="text"
                    placeholder="Search Events"
                    className="w-full bg-black border border-gray-600 rounded-md py-2 pl-4 pr-10 text-white placeholder-gray-400 outline-none"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-lg cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                </span>
            </div>
        </div>
    );
}
