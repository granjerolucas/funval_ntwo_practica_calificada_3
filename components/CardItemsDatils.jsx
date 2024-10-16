import React from "react";

const CardItemsDatils = ({ title, items }) => {
  return (
    <div className="">
      <h3 className="text-slate-500 text-xl font-bold ">About</h3>
      <div className="text-slate-400 text-base font-normal mt-4">
        <ul>
          {items.map((item, index) => (
            <li key={index} className="pt-1">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardItemsDatils;
