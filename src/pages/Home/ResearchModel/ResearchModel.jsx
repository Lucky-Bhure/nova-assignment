import { ChevronRight } from "lucide-react";
import { BsFillShieldLockFill } from "react-icons/bs";

const ResearchModel = () => {
  return (
    <section className="w-full h-fit flex flex-col justify-center items-center bg-[#ffffff3e] py-14 px-30 gap-4">
      <p className="text-[#6D4C71] font-bold text-4xl">Research Model</p>
      <p className="text-[#837F7F] font-normal text-[28px]">
        We're building the foundation models for emotionally intelligent
        communication
      </p>

      <div className="w-full h-fit flex flex-col justify-center items-center gap-4 mt-10">

        <Features />

      </div>
    </section>
  );
};

export default ResearchModel;


const features = [
  {
    title: "Tone Clarity Model",
    description: "Detects emotional tone and suggests healthier phrasing",
    bg: "#FCC9C7",
  },
  {
    title: "Intent Understanding Model",
    description:
      "Helps communicate what you truly mean, not what gets typed in the moment",
    bg: "#A4C8EA",
  },
  {
    title: "Conversation Safety Engine",
    description:
      "Reduces conflicts, misunderstandings and emotional harm",
    bg: "#BCA3BE",
  },
  {
    title: "Conversation Safety Engine",
    description:
      "Reduces conflicts, misunderstandings and emotional harm",
    bg: "#D9A1DE",
  },
]

function Features() {
  return (
    <div className="w-full flex flex-col items-center gap-4">

      {features.map((item, index) => (
        <div
          key={index}
          className="w-full max-w-xl h-24 flex items-center justify-between gap-4 bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition"
        >
          <div
            className="w-14 h-14 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: item.bg }}
          >
            <BsFillShieldLockFill size={24} color="#FFFFFF" />
          </div>

          <div className="flex-1 flex flex-col gap-1 text-justify">
            <p className="text-black font-medium text-[15px] font-inter">
              {item.title}
            </p>
            <p className="text-[#6E6D6D] text-[12px] leading-snug">
              {item.description}
            </p>
          </div>

          <ChevronRight size={16} absoluteStrokeWidth color="#000000" />
        </div>
      ))}

    </div>
  )
}
