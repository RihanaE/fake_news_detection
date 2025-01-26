import React from "react";
import CircleCard from "./CircleCard";

const HowItWork = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 text-center relative">
        <span className="relative z-10 bg-[#FAFBFC] px-4">How it works</span>
        <div className="absolute inset-0 flex items-center">
          <div className="border-t border-gray-200 flex-grow"></div>
        </div>
      </h2>
      <div className="flex justify-between items-center mx-16 my-16">
        <CircleCard
          image={"/input.png"}
          altText="input"
          description="Input an article"
        />
        <CircleCard
          image={"/process.png"}
          altText="process"
          description="Analayse"
        />
        <CircleCard
          image={"/output.png"}
          altText="output"
          description="Output the status"
        />
      </div>
    </>
  );
};

export default HowItWork;
