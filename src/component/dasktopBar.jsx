import React from "react";
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


const categories = [
  //{ id: 1, label: "Home", icon: home },
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

/* ---------- COMPONENT ---------- */
export default function DesktopSidebar() {
  return (
    // 👇 KEY FIX HERE
    <aside className="hidden md:block w-[280px] h-screen bg-white border-r mt-[-15px]">

      {/* ===== MENU ===== */}
      <div className="overflow-y-auto h-[calc(100%-60px)]">
        {categories.map((item) => (
          <button
            key={item.id}
            className="w-full flex items-center justify-between px-4 py-3 border-b hover:bg-red-50 transition"
          >
            <div className="flex items-center gap-3">
              <span className="">
                <img src={item.icon} alt="meuu" className="h-[17px] w-[17px]"/>
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
    </aside>
  );
}
