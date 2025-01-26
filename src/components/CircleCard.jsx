import React from "react";

const CircleCard = ({
  image,
  altText = "Image",
  className = "p-4",
  description = "",
}) => {
  return (
    <div className="flex flex-col items-center justify-center duration-300 ease-in-out hover:scale-105 hidden sm:flex">
      <div
        className={`
        flex items-center justify-center
        w-36 h-36 bg-white shadow-sm hover:shadow-md rounded-full
        overflow-hidden 
        ${className}
      `}
      >
        <img src={image} alt={altText} className="w-full h-full object-cover" />
      </div>
      <h1 className="mt-2 font-semibold">{description}</h1>
    </div>
  );
};

export default CircleCard;
