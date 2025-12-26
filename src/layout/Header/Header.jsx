import { ChevronDown } from "lucide-react";

const Header = () => {
  const path = window.location.pathname;

  return (
    <header className="w-full h-20 flex flex-row justify-between items-center bg-white px-56 z-50">
      <h1 className="font-bold text-xl text-[#6D4C71]">nova</h1>

      <nav className="flex flex-row gap-8 text-[#6D4C71]">
        
        <ul className="w-fit flex flex-row text-xs gap-8">
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
        
      </nav>

      <div className="w-fit flex flex-row gap-4 justify-between">
        <button variant="default" className="bg-[#10101054] text-[#171717] text-xs px-4 py-1 rounded-2xl pointer-events-none">CONTACT SALES</button>

        {
         path === '/about' ? (
            <button variant="default" className="bg-[#171717] text-white text-xs px-4 py-1 rounded-2xl">LOGIN</button>
          ) : null
        }
      </div>
    </header>
  );
};

export default Header;
