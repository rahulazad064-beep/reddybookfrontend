import React from "react";
import '../App.css'

/* ---------------- STATIC DATA ---------------- */
const matches = [
    {
        id: 1,
        title: "THE ASHES 2025 - 2026",
        subtitle: "(OTHERS)",
        live: true,
        date: "21 NOV",
        time: "08:00 AM",
        icons: [],
        odds: ["-", "-", "-", "-", "-", "-"],
    },
    {
        id: 2,
        title: "AFGHANISTAN U19 V BANGLADESH U19",
        subtitle: "(UNDER-19S ASIA CUP)",
        live: true,
        date: "13 DEC",
        time: "10:30 AM",
        icons: ["TV", "BM"],
        odds: ["9.2", "10", "-", "-", "1.11", "1.12"],
        volume: ["168.2", "1", "", "", "9.01", "1381.67"],
    },
    {
        id: 3,
        title: "SOUTH AFRICA W V IRELAND W",
        subtitle: "(WOMENS ONE DAY INTERNATIONALS)",
        live: true,
        date: "13 DEC",
        time: "01:30 PM",
        icons: ["TV", "BM"],
        odds: ["1.05", "1.06", "-", "-", "18.5", "19"],
        volume: ["28013.06", "30908.36", "", "", "16.35", "2.62"],
    },
    {
        id: 4,
        title: "NIGERIA V RWANDA",
        subtitle: "(OTHERS)",
        live: true,
        date: "13 DEC",
        time: "02:30 PM",
        icons: ["TV", "P"],
        odds: ["-", "-", "-", "-", "-", "-"],
    },
     {
        id: 5,
        title: "THE ASHES 2025 - 2026",
        subtitle: "(OTHERS)",
        live: true,
        date: "21 NOV",
        time: "08:00 AM",
        icons: [],
        odds: ["-", "-", "-", "-", "-", "-"],
    },
    {
        id: 6,
        title: "AFGHANISTAN U19 V BANGLADESH U19",
        subtitle: "(UNDER-19S ASIA CUP)",
        live: true,
        date: "13 DEC",
        time: "10:30 AM",
        icons: ["TV", "BM"],
        odds: ["9.2", "10", "-", "-", "1.11", "1.12"],
        volume: ["168.2", "1", "", "", "9.01", "1381.67"],
    },
    {
        id: 7,
        title: "SOUTH AFRICA W V IRELAND W",
        subtitle: "(WOMENS ONE DAY INTERNATIONALS)",
        live: true,
        date: "13 DEC",
        time: "01:30 PM",
        icons: ["TV", "BM"],
        odds: ["1.05", "1.06", "-", "-", "18.5", "19"],
        volume: ["28013.06", "30908.36", "", "", "16.35", "2.62"],
    },
    {
        id: 8,
        title: "NIGERIA V RWANDA",
        subtitle: "(OTHERS)",
        live: true,
        date: "13 DEC",
        time: "02:30 PM",
        icons: ["TV", "P"],
        odds: ["-", "-", "-", "-", "-", "-"],
    },
     {
        id: 9,
        title: "THE ASHES 2025 - 2026",
        subtitle: "(OTHERS)",
        live: true,
        date: "21 NOV",
        time: "08:00 AM",
        icons: [],
        odds: ["-", "-", "-", "-", "-", "-"],
    },
    {
        id: 10,
        title: "AFGHANISTAN U19 V BANGLADESH U19",
        subtitle: "(UNDER-19S ASIA CUP)",
        live: true,
        date: "13 DEC",
        time: "10:30 AM",
        icons: ["TV", "BM"],
        odds: ["9.2", "10", "-", "-", "1.11", "1.12"],
        volume: ["168.2", "1", "", "", "9.01", "1381.67"],
    },
    {
        id: 11,
        title: "SOUTH AFRICA W V IRELAND W",
        subtitle: "(WOMENS ONE DAY INTERNATIONALS)",
        live: true,
        date: "13 DEC",
        time: "01:30 PM",
        icons: ["TV", "BM"],
        odds: ["1.05", "1.06", "-", "-", "18.5", "19"],
        volume: ["28013.06", "30908.36", "", "", "16.35", "2.62"],
    },
    {
        id: 12,
        title: "NIGERIA V RWANDA",
        subtitle: "(OTHERS)",
        live: true,
        date: "13 DEC",
        time: "02:30 PM",
        icons: ["TV", "P"],
        odds: ["-", "-", "-", "-", "-", "-"],
    },
    {
        id: 13,
        title: "NIGERIA V RWANDA",
        subtitle: "(OTHERS)",
        live: true,
        date: "13 DEC",
        time: "02:30 PM",
        icons: ["TV", "P"],
        odds: ["-", "-", "-", "-", "-", "-"],
    },
     {
        id: 14,
        title: "THE ASHES 2025 - 2026",
        subtitle: "(OTHERS)",
        live: true,
        date: "21 NOV",
        time: "08:00 AM",
        icons: [],
        odds: ["-", "-", "-", "-", "-", "-"],
    },
    {
        id: 15,
        title: "AFGHANISTAN U19 V BANGLADESH U19",
        subtitle: "(UNDER-19S ASIA CUP)",
        live: true,
        date: "13 DEC",
        time: "10:30 AM",
        icons: ["TV", "BM"],
        odds: ["9.2", "10", "-", "-", "1.11", "1.12"],
        volume: ["168.2", "1", "", "", "9.01", "1381.67"],
    },
    {
        id: 16,
        title: "SOUTH AFRICA W V IRELAND W",
        subtitle: "(WOMENS ONE DAY INTERNATIONALS)",
        live: true,
        date: "13 DEC",
        time: "01:30 PM",
        icons: ["TV", "BM"],
        odds: ["1.05", "1.06", "-", "-", "18.5", "19"],
        volume: ["28013.06", "30908.36", "", "", "16.35", "2.62"],
    },
    {
        id: 17,
        title: "NIGERIA V RWANDA",
        subtitle: "(OTHERS)",
        live: true,
        date: "13 DEC",
        time: "02:30 PM",
        icons: ["TV", "P"],
        odds: ["-", "-", "-", "-", "-", "-"],
    },
    {
        id: 18,
        title: "NIGERIA V RWANDA",
        subtitle: "(OTHERS)",
        live: true,
        date: "13 DEC",
        time: "02:30 PM",
        icons: ["TV", "P"],
        odds: ["-", "-", "-", "-", "-", "-"],
    },
     {
        id: 19,
        title: "THE ASHES 2025 - 2026",
        subtitle: "(OTHERS)",
        live: true,
        date: "21 NOV",
        time: "08:00 AM",
        icons: [],
        odds: ["-", "-", "-", "-", "-", "-"],
    },
    {
        id: 20,
        title: "AFGHANISTAN U19 V BANGLADESH U19",
        subtitle: "(UNDER-19S ASIA CUP)",
        live: true,
        date: "13 DEC",
        time: "10:30 AM",
        icons: ["TV", "BM"],
        odds: ["9.2", "10", "-", "-", "1.11", "1.12"],
        volume: ["168.2", "1", "", "", "9.01", "1381.67"],
    },
    {
        id: 21,
        title: "SOUTH AFRICA W V IRELAND W",
        subtitle: "(WOMENS ONE DAY INTERNATIONALS)",
        live: true,
        date: "13 DEC",
        time: "01:30 PM",
        icons: ["TV", "BM"],
        odds: ["1.05", "1.06", "-", "-", "18.5", "19"],
        volume: ["28013.06", "30908.36", "", "", "16.35", "2.62"],
    },
    {
        id: 22,
        title: "NIGERIA V RWANDA",
        subtitle: "(OTHERS)",
        live: true,
        date: "13 DEC",
        time: "02:30 PM",
        icons: ["TV", "P"],
        odds: ["-", "-", "-", "-", "-", "-"],
    },
    {
        id: 23,
        title: "NIGERIA V RWANDA",
        subtitle: "(OTHERS)",
        live: true,
        date: "13 DEC",
        time: "02:30 PM",
        icons: ["TV", "P"],
        odds: ["-", "-", "-", "-", "-", "-"],
    },
     {
        id: 24,
        title: "THE ASHES 2025 - 2026",
        subtitle: "(OTHERS)",
        live: true,
        date: "21 NOV",
        time: "08:00 AM",
        icons: [],
        odds: ["-", "-", "-", "-", "-", "-"],
    },
    {
        id: 25,
        title: "AFGHANISTAN U19 V BANGLADESH U19",
        subtitle: "(UNDER-19S ASIA CUP)",
        live: true,
        date: "13 DEC",
        time: "10:30 AM",
        icons: ["TV", "BM"],
        odds: ["9.2", "10", "-", "-", "1.11", "1.12"],
        volume: ["168.2", "1", "", "", "9.01", "1381.67"],
    },
    {
        id: 26,
        title: "SOUTH AFRICA W V IRELAND W",
        subtitle: "(WOMENS ONE DAY INTERNATIONALS)",
        live: true,
        date: "13 DEC",
        time: "01:30 PM",
        icons: ["TV", "BM"],
        odds: ["1.05", "1.06", "-", "-", "18.5", "19"],
        volume: ["28013.06", "30908.36", "", "", "16.35", "2.62"],
    },
    {
        id: 27,
        title: "NIGERIA V RWANDA",
        subtitle: "(OTHERS)",
        live: true,
        date: "13 DEC",
        time: "02:30 PM",
        icons: ["TV", "P"],
        odds: ["-", "-", "-", "-", "-", "-"],
    },
    {
        id: 28,
        title: "NIGERIA V RWANDA",
        subtitle: "(OTHERS)",
        live: true,
        date: "13 DEC",
        time: "02:30 PM",
        icons: ["TV", "P"],
        odds: ["-", "-", "-", "-", "-", "-"],
    },
     {
        id: 29,
        title: "THE ASHES 2025 - 2026",
        subtitle: "(OTHERS)",
        live: true,
        date: "21 NOV",
        time: "08:00 AM",
        icons: [],
        odds: ["-", "-", "-", "-", "-", "-"],
    },
    {
        id: 30,
        title: "AFGHANISTAN U19 V BANGLADESH U19",
        subtitle: "(UNDER-19S ASIA CUP)",
        live: true,
        date: "13 DEC",
        time: "10:30 AM",
        icons: ["TV", "BM"],
        odds: ["9.2", "10", "-", "-", "1.11", "1.12"],
        volume: ["168.2", "1", "", "", "9.01", "1381.67"],
    },
    {
        id: 31,
        title: "SOUTH AFRICA W V IRELAND W",
        subtitle: "(WOMENS ONE DAY INTERNATIONALS)",
        live: true,
        date: "13 DEC",
        time: "01:30 PM",
        icons: ["TV", "BM"],
        odds: ["1.05", "1.06", "-", "-", "18.5", "19"],
        volume: ["28013.06", "30908.36", "", "", "16.35", "2.62"],
    },
    {
        id: 32,
        title: "NIGERIA V RWANDA",
        subtitle: "(OTHERS)",
        live: true,
        date: "13 DEC",
        time: "02:30 PM",
        icons: ["TV", "P"],
        odds: ["-", "-", "-", "-", "-", "-"],
    },
    {
        id:33,
        title: "NIGERIA V RWANDA",
        subtitle: "(OTHERS)",
        live: true,
        date: "13 DEC",
        time: "02:30 PM",
        icons: ["TV", "P"],
        odds: ["-", "-", "-", "-", "-", "-"],
    },
     {
        id: 34,
        title: "THE ASHES 2025 - 2026",
        subtitle: "(OTHERS)",
        live: true,
        date: "21 NOV",
        time: "08:00 AM",
        icons: [],
        odds: ["-", "-", "-", "-", "-", "-"],
    },
    {
        id: 35,
        title: "AFGHANISTAN U19 V BANGLADESH U19",
        subtitle: "(UNDER-19S ASIA CUP)",
        live: true,
        date: "13 DEC",
        time: "10:30 AM",
        icons: ["TV", "BM"],
        odds: ["9.2", "10", "-", "-", "1.11", "1.12"],
        volume: ["168.2", "1", "", "", "9.01", "1381.67"],
    },
    {
        id: 36,
        title: "SOUTH AFRICA W V IRELAND W",
        subtitle: "(WOMENS ONE DAY INTERNATIONALS)",
        live: true,
        date: "13 DEC",
        time: "01:30 PM",
        icons: ["TV", "BM"],
        odds: ["1.05", "1.06", "-", "-", "18.5", "19"],
        volume: ["28013.06", "30908.36", "", "", "16.35", "2.62"],
    },
    {
        id: 37,
        title: "NIGERIA V RWANDA",
        subtitle: "(OTHERS)",
        live: true,
        date: "13 DEC",
        time: "02:30 PM",
        icons: ["TV", "P"],
        odds: ["-", "-", "-", "-", "-", "-"],
    },
    {
        id: 38,
        title: "NIGERIA V RWANDA",
        subtitle: "(OTHERS)",
        live: true,
        date: "13 DEC",
        time: "02:30 PM",
        icons: ["TV", "P"],
        odds: ["-", "-", "-", "-", "-", "-"],
    },
     {
        id: 39,
        title: "THE ASHES 2025 - 2026",
        subtitle: "(OTHERS)",
        live: true,
        date: "21 NOV",
        time: "08:00 AM",
        icons: [],
        odds: ["-", "-", "-", "-", "-", "-"],
    },
    {
        id: 40,
        title: "AFGHANISTAN U19 V BANGLADESH U19",
        subtitle: "(UNDER-19S ASIA CUP)",
        live: true,
        date: "13 DEC",
        time: "10:30 AM",
        icons: ["TV", "BM"],
        odds: ["9.2", "10", "-", "-", "1.11", "1.12"],
        volume: ["168.2", "1", "", "", "9.01", "1381.67"],
    },
    {
        id: 41,
        title: "SOUTH AFRICA W V IRELAND W",
        subtitle: "(WOMENS ONE DAY INTERNATIONALS)",
        live: true,
        date: "13 DEC",
        time: "01:30 PM",
        icons: ["TV", "BM"],
        odds: ["1.05", "1.06", "-", "-", "18.5", "19"],
        volume: ["28013.06", "30908.36", "", "", "16.35", "2.62"],
    },
    {
        id: 42,
        title: "NIGERIA V RWANDA",
        subtitle: "(OTHERS)",
        live: true,
        date: "13 DEC",
        time: "02:30 PM",
        icons: ["TV", "P"],
        odds: ["-", "-", "-", "-", "-", "-"],
    },

];

/* ---------------- REUSABLE CELL ---------------- */
const OddCell = ({ value, sub, color }) => (
    <div
        className={`flex flex-col items-center justify-center h-[56px] text-sm font-semibold ${color === "blue" ? "bg-sky-300" : "bg-pink-300"
            }`}
    >
        <span>{value}</span>
        {sub && <span className="text-[11px] font-normal">{sub}</span>}
    </div>
);

/* ---------------- MAIN COMPONENT ---------------- */
export default function MarketBoard() {
    return (
        <div className="w-full bg-[#eef3f9]">

            {/* ================= HEADER ================= */}
            <div className="w-full bg-[#eef3f9]">

                {/* -------- DESKTOP -------- */}
                <div className="hidden md:flex items-center justify-between px-4 py-3">

                    {/* LEFT */}
                    <div>
                        {/* CRICKET TAB */}
                        <div className="relative inline-flex items-center bg-[#b3002d] text-white px-4 py-2 font-semibold">
                            <span className="flex items-center gap-2">
                                🏏 CRICKET
                            </span>

                            {/* diagonal cut */}
                            <span className="absolute right-[-24px] top-0 h-full w-12 bg-[#eef3f9] skew-x-[-20deg]" />
                        </div>

                        {/* FILTERS */}
                        <div className="flex gap-2 mt-2">
                            {["+ LIVE", "+ VIRTUAL", "+ PREMIUM"].map((item) => (
                                <button
                                    key={item}
                                    className="border border-[#b3002d] text-[#b3002d] text-xs px-4 py-1 rounded-full font-semibold"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT : 1 X 2 */}
                    <div className="flex gap-20 pr-10 text-sm font-semibold">
                        <span>1</span>
                        <span> </span>
                        <span>X</span>
                        <span> </span>
                        <span>2</span>
                    </div>
                </div>

                {/* -------- MOBILE -------- */}
                <div className="md:hidden px-3 py-2">

                    {/* CRICKET TAB */}
                    <div className="relative inline-flex items-center bg-[#b3002d] text-white px-3 py-2 font-semibold text-sm">
                        <span className="flex items-center gap-1">
                            🏏 CRICKET
                        </span>

                        {/* diagonal cut */}
                        <span className="absolute right-[-18px] top-0 h-full w-8 bg-[#eef3f9] skew-x-[-20deg]" />
                    </div>

                    {/* FILTERS */}
                    <div className="flex gap-1 mt-2">
                        {["+ LIVE", "+ VIRTUAL", "+ PREMIUM"].map((item) => (
                            <button
                                key={item}
                                className="border border-[#b3002d] text-[#b3002d] text-[10px] px-3 py-0.5 rounded-full font-semibold"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>


            {/* ===== MATCH LIST ===== */}
            {matches.map((match) => (
                <div key={match.id} className="border-b bg-white">

                    {/* ===== DESKTOP ROW ===== */}
                    <div className="hidden md:grid grid-cols-[2.5fr_70px_90px_90px_repeat(6,1fr)] items-center px-4 gap-2">

                        {/* Match */}
                        <div className="py-3">
                            <div className="font-semibold text-sm">
                                {match.title}
                            </div>
                            <div className="text-xs text-gray-500">
                                {match.subtitle}
                            </div>
                        </div>

                        {/* LIVE */}
                        <div className="relative text-green-600 font-semibold text-sm text-center">
                            LIVE
                            <span className="live-underline" />
                        </div>

                        {/* Date */}
                        <div className="text-xs text-red-600 text-center bg-[#edf1f7] py-1">
                            <div>{match.date}</div>
                            <div>{match.time}</div>
                        </div>

                        {/* Icons */}
                        <div className="flex justify-center gap-2">
                            {match.icons.map((ic) => (
                                <span
                                    key={ic}
                                    className={`text-xs px-2 py-1 rounded-full font-semibold
                    ${ic === "BM"
                                            ? "bg-red-600 text-white"
                                            : ic === "P"
                                                ? "bg-green-600 text-white"
                                                : "text-gray-600"
                                        }
                  `}
                                >
                                    {ic}
                                </span>
                            ))}
                        </div>

                        {/* Odds */}
                        {match.odds.map((odd, i) => (
                            <OddCell
                                key={i}
                                value={odd}
                                sub={match.volume?.[i]}
                                color={i % 2 === 0 ? "blue" : "pink"}
                            />
                        ))}
                    </div>

                    {/* ===== MOBILE ROW ===== */}
                    <div className="md:hidden px-3 py-3">
                        <div className="flex justify-between">
                            <div>
                                <div className="font-semibold text-sm">
                                    {match.title}
                                </div>
                                <div className="text-xs text-gray-500">
                                    {match.subtitle}
                                </div>
                            </div>

                            <div className="text-xs text-red-600 text-right bg-[#edf1f7] px-2 py-1">
                                <div>{match.date}</div>
                                <div>{match.time}</div>
                            </div>
                        </div>

                        <div className="flex justify-between mt-2 items-center">
                            <span className="relative text-green-600 text-xs font-semibold">
                                LIVE
                                <span className="live-underline" />
                            </span>

                            <div className="flex gap-2">
                                {match.icons.map((ic) => (
                                    <span
                                        key={ic}
                                        className={`text-xs px-2 py-1 rounded-full
                      ${ic === "BM"
                                                ? "bg-red-600 text-white"
                                                : ic === "P"
                                                    ? "bg-green-600 text-white"
                                                    : "text-gray-600"
                                            }
                    `}
                                    >
                                        {ic}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Mobile odds (2 rows like image) */}
                        <div className="grid grid-cols-3 gap-1 mt-2">
                            {match.odds.map((odd, i) => (
                                <OddCell
                                    key={i}
                                    value={odd}
                                    sub={match.volume?.[i]}
                                    color={i % 2 === 0 ? "blue" : "pink"}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

