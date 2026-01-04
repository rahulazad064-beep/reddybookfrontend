// Navbar.jsx
import { useState } from "react";
import LoginModal from "./login";
import logo from "./images/reddybook.io.png"
import EventTicker from "./event";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex items-center justify-between bg-white px-6 lg:px-16 py-3">
        
        {/* LEFT: Logo + Search + Rules */}
        <div className="flex items-center gap-6">
          
          {/* Logo */}
          <div className="leading-none">
            <img src={logo} alt="logo" className="h-[40px]"/>
          </div>

          {/* Search */}
          <div className="flex items-center bg-white h-[42px] w-[360px] rounded-md shadow-md px-3">
            <input
              type="text"
              placeholder="Search Events"
              className="flex-1 text-sm outline-none placeholder-gray-400"
            />
            <svg
              className="w-5 h-5 text-[#002a5c]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16" y1="16" x2="21" y2="21" />
            </svg>
          </div>

          {/* RULES */}
          <div className="bg-[#5E0719] rounded-md pb-[3px]">
            <button className="bg-[#c41630] text-white text-xs font-semibold px-4 py-2 rounded-md">
              RULES
            </button>
          </div>
        </div>

        {/* RIGHT: Auth */}
        <div className="flex items-center gap-[1px">
          <div className=" flex justify-center items-center border border-[#C10930]  rounded-[10px] p-[1px]">
            <button  onClick={()=>setOpen(true)} className=" bg-[#313132] text-white text-sm font-semibold px-[15px] py-[7px] rounded-[10px] hover:bg-[#6D081D] transition-all duration-1000">
            SIGNUP
          </button>
          </div>
         <div className=" flex justify-center items-center border border-[#C10930]  rounded-[10px] p-[1px]">
           <button onClick={()=>setOpen(true)} className=" bg-[#313132] text-white text-sm font-semibold px-[15px] py-[7px] rounded-[10px] hover:bg-[#6D081D] transition-all duration-1000">
            LOGIN
          </button>
         </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="flex md:hidden items-center justify-between bg-black px-1 py-3">
        
        {/* Logo */}
        <div className="leading-none">
          <img src={logo} alt="logo" className="h-[32px]"/>
        </div>

        {/* Buttons */}
       <div className="flex items-center gap-[10px]">
          <div className=" flex justify-center bg-white items-center border border-[#C10930]  rounded-[5px] p-[1px]">
            <button onClick={()=>setOpen(true)} className=" bg-[#313132] text-white text-sm font-semibold px-[15px] py-[7px] rounded-[5px] hover:bg-[#6D081D] transition-all duration-1000">
            SIGNUP
          </button>
          </div>
         <div className=" flex justify-center bg-white items-center border border-[#C10930]  rounded-[5px] p-[1px]">
           <button onClick={()=>setOpen(true)} className=" bg-[#313132] text-white text-sm font-semibold px-[15px] py-[7px] rounded-[5px] hover:bg-[#6D081D] transition-all duration-1000">
            LOGIN
          </button>
         </div>
        </div>
      </div>
      <div className="md:hidden block">
        <EventTicker/>
      </div>
       {open && <LoginModal onClose={() => setOpen(false)} />}
    </header>
  );
}
