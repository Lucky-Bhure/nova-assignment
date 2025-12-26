import React from "react";

const AboutNova = () => {
  return (
    <section className="w-full h-fit flex flex-col justify-between items-center bg-[#ffffff3e] py-14 gap-4 border">
      <div className="w-[70%] flex flex-row justify-between items-center">
        <p className="w-[30%] text-[48px] font-500 text-[#6D4C71] text-start">
          About Nova
        </p>
        <p className="w-[70%] text-[18px] font-400 text-[#6D4C71] text-center">
          Nova is a communication-intelligence company. Our mission is to help
          people talk to each other in a clearer, kinder, safer way. We design
          AI that improves human conversations — not by replacing them, but
          by guiding them toward clarity and understanding.
        </p>
      </div>

      <div className="w-[70%] flex flex-row justify-between items-center mt-10 border-t border-[#232323] p-10 ">

        <div className="w-[50%] flex flex-col justify-center items-center gap-4 relative">
        <img
          src="./videoimage.png"
          alt="video image"
          className="w-[80%] border border-[#353535] rounded-xl"
        />

        <div className="absolute w-[70%] h-1.5 bg-[#ffffff75] bottom-6 rounded-xl border border-red"></div>
        <div className="absolute w-[20%] h-1.5 bg-[#ffffff] bottom-6 start-21 rounded-xl"></div>

        </div>

        <div className="w-[40%] flex flex-col gap-4">
          <p className="text-[32px] font-500 text-[#6D4C71] mb-4">Our vision</p>

          <div className="w-full flex flex-col">
            <p>
              We envision a world where misunderstandings no longer break
              relationships.
            </p>
            <p>Where conversations feel safe instead of stressful.</p>
            <p>
              Where tone, intention, and boundaries are understood — not
              guessed.
            </p>
          </div>

          <div className="w-full flex flex-col">
            <p>
              Nova is building the world's first system that helps humans communicate the right way:
            </p>
            <p>with clarity, with kindness, with confidence.</p>
            <p>
              A world where people feel understood.
            </p>
            <p>That's the future we're creating.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNova;