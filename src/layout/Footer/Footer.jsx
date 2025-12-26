import { Button } from "@/components/ui/button";
import { Dot } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-fit border px-14 flex flex-col justify-around">
      <div className="w-full h-[70%] flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-xl font-bold text-[#6D4C71] w-[34%] h-full flex justify-center md:justify-start items-center md:px-20">
          nova
        </h2>

        <div className="w-full md:w-[36%] h-full flex flex-col md:flex-row justify-around md:items-start align-middle gap-8 py-10 text-[#353535]">
          <ul className="space-y-2 text-center md:text-justify text-xs">
            <li>Products</li>
            <li>How Nova works</li>
            <li>Feature Overview</li>
            <li>For Dating</li>
            <li>For Friends and Family</li>
            <li>For work conversations</li>
          </ul>

          <ul className="space-y-2 text-center md:text-justify text-xs">
            <li>Company</li>
            <li>About Nova</li>
            <li>Our Mission</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Press</li>
          </ul>

          <ul className="space-y-2 text-center md:text-justify text-xs">
            <li>Resources</li>
            <li>Help center</li>
            <li>Our Mission</li>
            <li>Safety Center</li>
            <li>Research</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="w-[34%] h-full flex flex-col md:flex-row gap-4 md:gap-8 justify-end md:items-end pb-10">
          <Button variant="default" className="rounded-2xl text-xs">
            SIGN UP
          </Button>
          <Button variant="outline" className="rounded-2xl text-xs">
            CONTACT US
          </Button>
        </div>
      </div>

      <div className="w-full h-[10%] flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-row gap-2 justify-center items-center">
          <img src="./appstore.png" alt="app-store" width={90} />

          <div className="border-2 border-[#232323] rounded-full p-2">
            <FaDiscord size={14} />
          </div>
          <div className="border-2 border-[#232323] rounded-full p-2">
            <FaXTwitter size={14} />
          </div>
          <div className="border-2 border-[#232323] rounded-full p-2">
            <FaLinkedinIn size={14} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap gap-2 md:gap-8 justify-center items-center text-xs text-[#666666]">
          <div className="w-fit flex flex-row gap-2">
            <p className="text-center">TERMS OF USE</p>
            <p className="text-center">PRIVACY POLICY</p>
          </div>
          <button className="flex justify-center items-center gap-1 rounded-2xl border-2 bg-transparent text-[10px] md:text-xs text-[#666666] hover:bg-transparent px-2 py-1 md:px-1 md:pr-3">
            <Dot strokeWidth={10} color="#05DF72" />
            <span className="ml-1">SYSTEM STATUS</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
