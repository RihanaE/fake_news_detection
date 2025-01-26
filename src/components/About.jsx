import React from "react";

const About = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-4 text-center relative">
        <span className="relative z-10 bg-[#FAFBFC] px-4">About FactCheck</span>
        <div className="absolute inset-0 flex items-center">
          <div className="border-t border-gray-200 flex-grow"></div>
        </div>
      </h2>

      <div className="text-lg text-gray-700 leading-8">
        <p>
          FactCheck is a platform designed to analyze and verify the
          authenticity of Amharic articles. With the rise of misinformation and
          fake news, it’s become crucial to have a reliable tool that helps
          identify accurate information. FactCheck is here to ensure that you
          can trust the content you consume.
        </p>
        <p className="mt-4">
          Our simple and intuitive interface allows users to input articles, and
          within seconds, the platform provides an assessment of whether the
          article is real or fake.
        </p>
      </div>
    </>
  );
};

export default About;