import { MoveLeft, MoveRight } from "lucide-react";
import React from "react";

const OurFoundations = () => {
  return (
    <section className="w-full h-fit flex flex-col bg-[#353535] py-14 px-56">
      <p className="text-[46px] font-400 text-[#FFFFFF] text-justify">
        Our Foundations
      </p>
      <p className="text-[18px] text-[#BFBFBF] font-400 text-justify">
        A history of communication science, linguistics, and human interaction.
      </p>
      <div className="w-full h-0.5 bg-[#7A7A7A] my-8" />

      <div className="w-full flex flex-row justify-between items-center p-6">
        <div className="w-[36%] flex justify-center items-center">
          <img src="/foundationimage.jpg" alt="foundationimage" />
        </div>

        <div className="w-[60%] flex flex-col gap-4 text-[#BFBFBF] text-justify px-4">
          <div className="flex flex-col text-[#FFFFFF] font-400 text-[26px] text-center leading-tight mb-4">
            <p>Language shapes relationships</p>
            <p>Clarity shapes connection.</p>
          </div>

          <div className="flex flex-col text-[#BFBFBF] font-600 text-[16px] leading-tight mb-4">
            <p>
              Researchers across communication theory, pragmatics, linguistics,
              and behavioural psychology have shown one truth:</p>
            <p>Most conflict comes from miscommunication — not intention.
            </p>
            <p>The roots of Nova draw from:</p>
            <ul className="list-disc list-inside ml-4">
                <li>speech act theory</li>
                <li>conversation analysis</li>
                <li>interpersonal communication research</li>

                <li>conflict de-escalation</li>
                <li>tone & pragmatics analysis</li>
                <li>boundary psychology</li>
                <li>digital communication behaviour</li>
            </ul>
            <p>And from one belief:</p>
            <p className="font-800">Better conversations create better lives.</p>
          </div>
        </div>
      </div>
      <div className="w-full h-0.5 bg-[#7A7A7A] my-8" />

      <div className="w-full flex flex-row justify-between items-center pt-6 text-[#FFF4E8] gap-2">
        <div className="p-4 border border-[#FFF4E8]  rounded-full">
            <MoveLeft size={18} />
        </div>

        <p className="w-40 text-[12px] font-300">GRICE'S COOPERATIVE PRINCIPLE (CLARITY & INTENT)</p>
        <p className="w-40 text-[12px] font-300">DEBORAH TANNEN (CONVERSATIONAL STYLE)</p>
        <p className="w-40 text-[12px] font-300">GOTTMAN (RELATIONSHIP COMMUNICATION PATTERNS)</p>
        <p className="w-40 text-[12px] font-300">LINGUISTIC PRAGMATICS (TONE, IMPLICATION, CONTEXT)</p>
        <p className="w-40 text-[12px] font-300">MODERN DIGITAL COMMUNICATION BEHAVIOR STUDIES</p>
        <div className="p-4 border border-[#FFF4E8] text-[#FFF4E8] rounded-full">
            <MoveRight size={18} />
        </div>

      </div>
    </section>
  );
};

export default OurFoundations;
