import Image from "next/image";
import React from "react";

const ItemTeam = ({ src, name, role }) => {
  return (
    <div className="w-full ">
      <Image className="" src={src} width={300} height={300} alt="team" />
      <div className="text-center">
        <h3 className="text-slate-500 text-xl font-bold ">{name}</h3>
        <h4 className="text-slate-400 text-base font-normal  leading-snug">
          {role}
        </h4>
      </div>
    </div>
  );
};

export default ItemTeam;
