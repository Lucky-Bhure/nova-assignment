import { MoveRight } from "lucide-react";

const NovaWork = () => {
  return (
    <section className="w-full h-fit flex flex-col justify-center items-center bg-[#ffffff00] py-14 px-30 gap-8 text-[#6D4C71]">
      <p className="font-bold text-5xl">Nova's Core Value</p>
      <p className="font-semibold text-3xl">
        Nova is the world's first communication guidance system.
      </p>

      <div className="font-400 text-xl flex flex-col ">
        <p>
          It helps humans express themselves clearly, understand each other
          better, and create emotionally safe conversations.
        </p>
        <p>
          Nova doesn't fix your relationships. Nova fixes how you communicate —
          so your relationships can thrive.
        </p>
      </div>

      <button className="flex flex-row justify-center items-center gap-2 bg-[#6D4C71] rounded-sm px-8 py-4 text-white hover:shadow-md transition text-2xl">
        Learn How Nova Works <MoveRight size={16} />
      </button>
    </section>
  );
};

export default NovaWork;
