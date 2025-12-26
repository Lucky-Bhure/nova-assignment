import React from "react";

const ExploreResearch = () => {
  return (
    <section className="w-full h-fit flex flex-col justify-center items-center bg-[#ffffff3e] py-14 px-48 gap-4">
      <p className="font-bold text-[48px] text-[#9F76A4] leading-14">We are solving the communication problem AI has ignored.</p>
      
      <div className="w-full flex flex-col gap-2 text-[20px] font-normal text-justify text-[#6D4C71] px-20 mt-10">
        <p>AI has helped humans write faster, search faster, work faster — but not communicate better.</p>

      <p>Human relationships break because of miscommunication, not lack of information.</p>

      <p>Nova builds AI systems that:</p>
      <ul className="list-disc list-inside mb-4">
        <li>understand tone and intention</li>
        <li>detect risky conversation patterns</li>
        <li>guide expression</li>
        <li>prevent emotional accidents</li>
        <li>make conversations safer and clearer</li>
      </ul>

      <p>We are building the foundation models for healthy human communication, not for productivity — but for connection.</p>
      </div>

      <button className="mt-10 flex flex-row justify-center items-center gap-2 bg-[#59375D] rounded-sm px-14 py-6 text-[24px] text-white hover:shadow-md transition">
        Explore Our Research
      </button>
    </section>
  );
};

export default ExploreResearch;
