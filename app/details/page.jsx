import Image from "next/image";
import React from "react";

const PageDetails = () => {
  return (
    <div className="bg-[url('/images/details/illustration1.png')] bg-[length:20rem_20rem] bg-[top_8rem_left_15rem] bg-transparent bg-no-repeat  py-10">
      <div className="bg-[url('/images/details/illustration2.png')] bg-[length:20rem_20rem] bg-[top_8rem_right_25rem] bg-no-repeat bg-transparent">
        <div className="container max-w-6xl  mx-auto">
          <div className="text-center py-10 flex flex-col gap-y-40">
            <div className="grid grid-cols-2 justify-start items-center gap-0 ">
              <Image
                src="/images/details/illustration3.png"
                width={500}
                height={300}
                alt="ilustration3"
              />
              <div className="justify-self-end flex-col justify-start items-start gap-4 flex w-4/5">
                <h3 className=" text-gray-800 text-4xl font-bold  text-left">
                  A creative team which builds stunning UI/UX
                </h3>
                <p className=" text-slate-500 text-base font-normal  text-left">
                  {`Today, I'd like to show you some incredible Sign Up screen app
                  UI ideas and concepts that offer a modern user experience.`}
                  <br />
                  The most stunning, cutting-edge UI/UX.
                </p>
                <div className="text-left">
                  <span className="text-slate-500 text-base font-normal  text-left">
                    Klean is a free Bootstrap 5 template for multipurpose
                    landing pages. This design is a perfect choice, carefully
                    curated by{" "}
                  </span>
                  <span className="text-slate-500 text-base font-bold ">
                    ThemeWagon
                  </span>
                </div>
                <button className="h-9 px-4 py-[7px] rounded-lg border border-purple-400 justify-start items-start gap-2.5 inline-flex text-purple-400 text-base font-bold">
                  Read More
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 justify-start items-center gap-0 ">
              <div className="justify-self-start flex-col justify-start items-start gap-4 flex w-4/5">
                <h3 className=" text-gray-800 text-4xl font-bold  text-left">
                  Devoted to defining the cutting edge
                </h3>
                <p className=" text-slate-500 text-base font-normal  text-left">
                  {`"This new creation is cutting-edge technology," says the
                  researcher, "whose study originates from a business at the
                  forefront of space science."`}
                </p>
                <div className="text-left">
                  <span className="text-slate-500 text-base font-normal  text-left">
                    Klean is a free Bootstrap 5 template for multipurpose
                    landing pages. This design is a perfect choice, carefully
                    curated by{" "}
                  </span>
                  <span className="text-slate-500 text-base font-bold ">
                    ThemeWagon
                  </span>
                </div>
                <button className="h-9 px-4 py-[7px] rounded-lg border border-purple-400 justify-start items-start gap-2.5 inline-flex text-purple-400 text-base font-bold">
                  Read More
                </button>
              </div>
              <Image
                className="justify-self-end"
                src="/images/details/illustration6.png"
                width={500}
                height={300}
                alt="ilustration3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageDetails;
