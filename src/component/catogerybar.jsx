import { useState } from "react";
import logo from "./images/reddybook.io.png"
import home from './images/menu-home.png'
import inplay from './images/menu-inplay.png'
import cricket from './images/menu-4.png'
import tennis from './images/menu-2.png'
import pol from './images/menu-2378961.png'
import cas from './images/menu-99998.png'
import sbook from './images/menu-99991.png'
import horce from './images/menu-7.png'
import racing from './images/menu-4339.png'
import Binary from './images/menu-99990.png'
import kab from './images/menu-99994.png'
import basket from './images/menu-7522.png'
import bas from './images/menu-7511.png'
import tt from './images/menu-20.png'
import vol from './images/menu-998917.png'
import ice from './images/menu-7524.png'
import foot from './images/menu-1.png'

/* ---------- DATA ---------- */
const categories = [
    { id: 1, label: "Home", icon: home },
    { id: 17, label: "In-Play", icon: inplay },
    { id: 2, label: "Football", icon: foot, hasChild: true },
    { id: 3, label: "Tennis", icon: tennis, hasChild: true },
    { id: 4, label: "Politics", icon: pol, hasChild: true },
    { id: 5, label: "Casino", icon: cas },
    { id: 6, label: "Sports Book", icon: sbook },
    { id: 7, label: "Horse Racing", icon: horce, hasChild: true },
    { id: 8, label: "Greyhound Racing", icon: racing, hasChild: true },
    { id: 9, label: "Binary", icon: Binary },
    { id: 10, label: "Kabaddi", icon: kab, hasChild: true },
    { id: 11, label: "Basketball", icon: basket, hasChild: true },
    { id: 12, label: "Baseball", icon: bas, hasChild: true },
    { id: 13, label: "Table Tennis", icon: tt, hasChild: true },
    { id: 14, label: "Volleyball", icon: vol, hasChild: true },
    { id: 15, label: "Ice Hockey", icon: ice, hasChild: true },
    { id: 16, label: "Cricket", icon: cricket, hasChild: true },
];

const mobileTabs = categories.slice(0, 5);

/* ---------- COMPONENT ---------- */
export default function CategoryBar() {
    const [active, setActive] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {/* ================= MOBILE TOP BAR ================= */}
            <div className="flex md:hidden items-center bg-[#2b2b2b]">
                {mobileTabs.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={`flex-1 flex flex-col items-center justify-center py-2 text-[11px] font-semibold
              ${active === item.id
                                ? "bg-[#b3002d] text-white"
                                : "text-gray-200"
                            }
            `}
                    >
                        <span className="mb-1">
                            <img src={item.icon} className="h-[17px] w-[17px]" />
                        </span>
                        {item.label}
                    </button>
                ))}

                {/* Hamburger */}
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="w-[60px] flex items-center justify-center text-white text-2xl"
                >
                    ☰
                </button>
            </div>

            {/* ================= DESKTOP BAR ================= */}
            <div className="hidden md:block bg-[#313233]">
                <div className="flex overflow-x-auto scrollbar-hide">
                    {categories.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActive(item.id)}
                            className={`flex-none px-[25px] py-[5px] text-[12px] font-semibold whitespace-nowrap uppercase
          ${active === item.id
                                    ? "bg-[#b3002d] text-white"
                                    : "text-gray-200 hover:bg-[#3a3a3a]"
                                }
        `}
                        >
                            <div className="flex flex-col items-center justify-center">
                                <span className="mb-[1px]">
                                    <img src={item.icon} className="h-[17px] w-[17px]" />
                                </span>
                                {item.label}
                            </div>
                        </button>
                    ))}
                </div>
            </div>


            {/* ================= OVERLAY ================= */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* ================= SIDEBAR ================= */}
            <div
                className={`fixed top-0 left-0 h-[100vh] w-[50%] bg-white z-50 transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <div className="flex justify-center">
                        <img src={logo} alt="logo" className="h-[32px]"/>
                    </div>

                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="text-xl text-gray-600"
                    >
                        ✕
                    </button>
                </div>

                {/* Menu */}
                <div className="overflow-y-auto h-[calc(100%-60px)]">
                    {categories.slice(2).map((item) => (
                        <button
                            key={item.id}
                            onClick={() => {
                                setActive(item.id);
                                setSidebarOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-4 py-3 border-b
                ${active === item.id
                                    ? "bg-red-50"
                                    : "bg-white"
                                }
              `}
                        >
                            <div className="flex items-center gap-3">
                                <span className="">
                                    <img src={item.icon} className="h-[17px] w-[17px]" />
                                </span>
                                <span className="text-red-600 font-medium text-sm">
                                    {item.label}
                                </span>
                            </div>

                            {item.hasChild && (
                                <svg
                                    className="w-4 h-4 text-red-600"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}
