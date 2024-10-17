import Image from "next/image";
import React from "react";

const FeatureItem = ({ image, title, description }) => {
  return (
    <div className=" flex-col justify-center items-center gap-6 inline-flex py-4">
      <Image src={image} width={30} height={30} alt="" className="w-20 my-4"/>
      <div className="flex-col justify-start items-center gap-2 flex">
        <div className="text-slate-500 text-xl font-bold font-['Nunito']">
          {title}
        </div>
        <div className="w-[286px] text-center text-slate-400 text-base font-normal font-['Nunito'] leading-snug">
          {description}
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
