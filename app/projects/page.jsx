import Image from "next/image";
import React from "react";

const PageProjects = () => {
  return (
    <div className="bg-gradient-to-b from-slate-100 from-20%   via-slate-200 via-80% to-slate-100  to-2% py-10">
      <div className="container max-w-6xl  mx-auto">
        <div className="text-center py-10">
          <h2 className="text-gray-800 text-4xl font-bold  ">Our Projects</h2>
          <p className="pt-4 text-center text-slate-500 text-base font-normal mx-auto w-2/4">
            {`A project is a single or team activity, combining research and design with best effort. Here are some of our team's projects`}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-y-4 gap-x-2"></div>
        <div className="gap-8 columns-3 p-8">
          <Image
          className="w-full"
            src={"/images/projects/image1.png"}
            width={300}
            height={300}
            alt="project1"
          />
          <Image
          className="mt-8 w-full"
            src={"/images/projects/image2.png"}
            width={300}
            height={300}
            alt="project2"
          />
          <Image
          className="mt-8 w-full"
            src={"/images/projects/image3.png"}
            width={300}
            height={300}
            alt="project3"
          />
          <Image
          className="mt-8 w-full"
            src={"/images/projects/image4.png"}
            width={300}
            height={300}
            alt="project4"
          />
          <Image
          className="mt-8 w-full"
            src={"/images/projects/image5.png"}
            width={300}
            height={300}
            alt="project5"
          />
          <Image
          className="mt-8 w-full"
            src={"/images/projects/image6.png"}
            width={300}
            height={300}
            alt="project6"
          />
        </div>
      </div>
    </div>
  );
};

export default PageProjects;
