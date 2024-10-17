import Image from "next/image";
import React from "react";
import ItemTeam from "./_components/ItemTeam";

const PageTeam = () => {
  return (
    <div className="bg-gradient-to-b from-slate-100 from-20%   via-slate-200 via-80% to-slate-100  to-2% py-10">
      <div className="container max-w-6xl  mx-auto">
        <div className="text-center py-10">
          <h2 className="text-gray-800 text-4xl font-bold  ">Our team</h2>
          <p className="pt-4 text-center text-slate-500 text-base font-normal mx-auto w-2/4">
            {`People from various origins, cultures, and personalities make up our team. This blend makes it a powerful team`}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-y-4 gap-x-2"></div>
        <div className="gap-8 columns-4 p-8">
          <ItemTeam role="CEO" name="John Adams" src={"/images/team/image1.png"} />
          <ItemTeam role="Senior Developer" name="Carrey Johnson" src={"/images/team/image2.png"} />
          <ItemTeam role="Developer" name="Ray Marie" src={"/images/team/image3.png"} />
          <ItemTeam role="Designer" name="Austin Min" src={"/images/team/image4.png"} />
        </div>
        <div className="flex text-center justify-center items-center mt-20 ">
          <button className=" px-4 py-2 rounded-lg border border-purple-400   text-purple-400 text-base font-bold">
            View Full Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageTeam;
