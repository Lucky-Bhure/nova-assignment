import { ChevronDown, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const path = window.location.pathname;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);


  return (
    <header className="fixed w-full h-20 flex items-center justify-between bg-white px-6 sm:px-56 z-50 top-0">
      <h1 className="font-bold text-xl text-[#6D4C71] cursor-pointer" onClick={() => navigate('/')}>nova</h1>

      <nav className="text-[#6D4C71]">
        {/* Desktop nav */}
        <ul className="hidden sm:flex w-fit flex-row text-xs gap-8">
          <li className="hover:cursor-pointer w-fit flex flex-row items-center gap-1">
            <p>PRODUCTS</p>
            <ChevronDown size={12} strokeWidth={1} absoluteStrokeWidth />
          </li>
          <li className="hover:cursor-pointer w-fit flex flex-row items-center gap-1">
            <p>DEVELOPERS</p>
            <ChevronDown size={12} strokeWidth={1} absoluteStrokeWidth />
          </li>
          <li className="inline-block hover:cursor-pointer">PRICING</li>
          <li className="inline-block hover:cursor-pointer">BLOG</li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="sm:hidden p-2 rounded-md"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((s) => !s)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div className="w-fit flex flex-row gap-4 justify-between items-center">
        <button variant="default" className="bg-[#10101054] text-[#171717] text-xs px-4 py-1 rounded-2xl">CONTACT SALES</button>

        {path === '/about' ? (
          <button variant="default" className="bg-[#171717] text-white text-xs px-4 py-1 rounded-2xl">LOGIN</button>
        ) : null}
      </div>

      {/* About button - desktop only */}
      <button
        onClick={() => navigate('/about')}
        className="hidden sm:inline-block absolute bg-[#fff700] rounded-2xl py-2 px-4 right-10"
      >
        About
      </button>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="sm:hidden absolute top-20 left-0 w-full bg-white shadow-md z-40">
          <ul className="flex flex-col gap-4 p-4 text-[#6D4C71] text-sm">
            <li className="flex items-center justify-between" onClick={() => setMobileOpen(false)}>
              <span className="flex items-center gap-2">PRODUCTS <ChevronDown size={14} /></span>
            </li>
            <li className="flex items-center justify-between" onClick={() => setMobileOpen(false)}>
              <span className="flex items-center gap-2">DEVELOPERS <ChevronDown size={14} /></span>
            </li>
            <li onClick={() => setMobileOpen(false)}>PRICING</li>
            <li onClick={() => setMobileOpen(false)}>BLOG</li>
            <li className="pt-2">
              <button className="w-full bg-[#10101054] text-[#171717] text-sm px-4 py-2 rounded-2xl">CONTACT SALES</button>
            </li>
            {path === '/about' ? (
              <li className="pt-2">
                <button className="w-full bg-[#171717] text-white text-sm px-4 py-2 rounded-2xl">LOGIN</button>
              </li>
            ) : null}
            <li className="pt-2">
              <button onClick={() => { setMobileOpen(false); navigate('/about'); }} className="w-full bg-[#fff700] rounded-2xl py-2">About</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
