import ValuesGrid from "./ValuesGrid";

const OurPrinciples = () => {
  return (
    <section className="w-full h-fit flex flex-col bg-[#353535] py-14 px-56 gap-4">
      <p className="text-[46px] font-400 text-[#FFFFFF] text-justify">
        Our Principles
      </p>

      <div className="w-full h-0.5 bg-[#7A7A7A] mb-8" />
      <ValuesGrid />
    </section>
  );
};

export default OurPrinciples;
