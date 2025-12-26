import { ChevronRight, Play } from "lucide-react";
import React from "react";
import { FaPlay } from "react-icons/fa";

const UseCases = () => {
  return (
    <section className="w-full h-fit flex flex-col justify-center items-center bg-[#ffffff20] py-18 px-56 gap-4">
      <p className="text-[#6D4C71] font-bold text-4xl">
        Nova's Real Life Usecases
      </p>

      <div className="w-full flex flex-col md:flex-row justify-between items-center mt-14 px-2">
        <ul className="w-[40%] text-start font-medium h-fit text-xl flex flex-col gap-2">
          <li className="w-[80%] px-4 py-10 rounded-xl bg-[#000000] text-[#FFFFFF] border border-[#000000] flex flex-row justify-between items-center">
            For Modern Dating
            <ChevronRight size={18} />
          </li>
          <li className="w-[80%] px-4 py-10 rounded-xl bg-[#FFFFFF] text-[#202020] border border-[#B4AFAF]">
            For Personal Conversations
          </li>
          <li className="w-[80%] px-4 py-10 rounded-xl bg-[#FFFFFF] text-[#202020] border border-[#B4AFAF]">
            For Friendships and Family
          </li>
          <li className="w-[80%] px-4 py-10 rounded-xl bg-[#FFFFFF] text-[#202020] border border-[#B4AFAF]">
            For Work and Communications
          </li>
        </ul>

        <div className="relative w-[60%] h-80 flex justify-center items-center bg-[#DFD2E0] rounded-2xl">
          {/* Left card */}
          <div className="absolute left-8 w-60 h-60 rounded-xl bg-[#FBEAE6] p-5 text-sm text-[#2B4A6F]">
            <div className="mb-3 text-xl">🦊</div>
            <p className="leading-snug text-justify">
              Communicate with honesty, clarity, and kindness — even when emotions are high.
            </p>
            <div className="place-self-end absolute bottom-4 w-12 h-6 rounded-2xl bg-[#F3E9EE] flex items-center justify-center shadow">
              <FaPlay size={12} color="#353535"/>
            </div>
          </div>

          {/* Right card */}
          <div className="absolute right-8 w-60 h-60 rounded-xl bg-[#F3E9EE] p-5 text-sm text-[#8A5A6A]">
            <div className="mb-3 text-xl">🦊</div>
            <p className="leading-snug text-justify">
              Handle sensitive conversations with empathy and calmness.
            </p>
            <div className="place-self-end absolute bottom-4 w-12 h-6 rounded-2xl bg-[#F4D9D9] flex items-center justify-center shadow">
              <FaPlay size={12} color="#353535"/>
            </div>
          </div>

          {/* Center active card */}
          <div className="relative z-10 w-65 h-65 rounded-2xl bg-[#CFCBFF] p-6 flex flex-col justify-between shadow-lg">
            <div>
              <div className="mb-3 text-xl ">🫂</div>
              <p className="text-sm text-[#1F1F1F] leading-snug text-justify">
                Express your intentions clearly. Avoid misunderstandings. Create a safer experience for both people.
              </p>
            </div>

            <div className="self-end w-12 h-6 absolute bottom-4 rounded-2xl bg-white flex items-center justify-center shadow">
              <FaPlay size={16} color="#353535"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
