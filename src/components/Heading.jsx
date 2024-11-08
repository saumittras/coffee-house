import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="flex  flex-col w-full justify-centeritems-center my-12">
      <h1 className="text-xl md:text-base lg:text-4xl font-thin text-center mb-4">
        {title}
      </h1>
      <p className="text-xs md:text-base text-gray-600 text-center font-thin ">
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
