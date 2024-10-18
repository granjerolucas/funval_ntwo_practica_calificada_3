import { StartIcon } from "@/src/utils/icons";
import Image from "next/image";
import React from "react";

const PageTestimonial = () => {
  return (
    <div className="bg-gradient-to-b from-slate-100 from-20%   via-slate-200 via-80% to-slate-100  to-2% py-10">
      <div className="container max-w-6xl  mx-auto">
        <div className="text-center py-10">
          <h2 className="text-gray-800 text-4xl font-bold  ">
            What our clients have to say
          </h2>
          <p className="pt-4 px-2 text-center text-slate-500 text-base font-normal mx-auto w-2/4">
            {`Our success is determined on how satisfied our customers are with the service. These reviews say we have stuff to do.`}
          </p>
        </div>
        <div className="grid grid-cols-2 ">
          <Image
            src={"/images/testimonial/image1.png"}
            width={300}
            height={300}
            alt="testimonial1"
            className="w-5/6"
          />
          <div className="flex flex-col  justify-between pb-6">
            <span>
              <svg
                width="95"
                height="76"
                viewBox="0 0 95 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M92.3611 38.8208L92.3611 69.08C92.3611 70.9261 90.8646 72.4226 89.0185 72.4226L55.9445 72.4226C54.0984 72.4226 52.6019 70.9261 52.6019 69.08L52.6019 34.6002C52.6019 33.9578 52.787 33.329 53.135 32.7891L71.5841 4.17032C72.1995 3.21564 73.2577 2.63883 74.3935 2.63883L78.1827 2.63883C80.6168 2.63883 82.2347 5.15736 81.2227 7.37115L73.9528 23.2738C71.3428 28.983 75.5153 35.4782 81.7928 35.4782L89.0185 35.4782C90.8646 35.4782 92.3611 36.9747 92.3611 38.8208Z"
                  stroke="url(#paint0_linear_2804_719)"
                  stroke-width="5.27778"
                />
                <path
                  d="M42.3982 38.8208L42.3982 69.08C42.3982 70.9261 40.9016 72.4226 39.0556 72.4226L5.98151 72.4226C4.13545 72.4226 2.63892 70.9261 2.63892 69.08L2.63892 34.6002C2.63892 33.9578 2.82403 33.329 3.17209 32.7891L21.6212 4.17032C22.2366 3.21564 23.2947 2.63883 24.4306 2.63883L28.2197 2.63883C30.6539 2.63883 32.2717 5.15736 31.2597 7.37115L23.9898 23.2738C21.3799 28.983 25.5523 35.4782 31.8298 35.4782L39.0556 35.4782C40.9016 35.4782 42.3982 36.9747 42.3982 38.8208Z"
                  stroke="url(#paint1_linear_2804_719)"
                  stroke-width="5.27778"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2804_719"
                    x1="72.4815"
                    y1="75.0615"
                    x2="72.4815"
                    y2="-6.30038e-05"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#B4D2FF" />
                    <stop offset="1" stop-color="#D0E3FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_2804_719"
                    x1="22.5185"
                    y1="75.0615"
                    x2="22.5185"
                    y2="-6.30038e-05"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#B4D2FF" />
                    <stop offset="1" stop-color="#D0E3FF" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <div className=" text-purple-400 text-3xl font-bold ">
              Outstanding!!
            </div>
            <div className=" text-slate-500 ">
              I just wanted to drop you a little email to say thank you for all
              your hard work. I'm delighted I chose you as my partner. Your
              websites are quite simple to edit and maintain, which is
              fantastic.
            </div>
            <div className="h-[22px] justify-start items-start gap-2 inline-flex">
              <div className="text-yellow-500 ">
                <StartIcon />
              </div>
              <div className="text-yellow-500 ">
                <StartIcon />
              </div>
              <div className="text-yellow-500 ">
                <StartIcon />
              </div>
              <div className="text-yellow-500 ">
                <StartIcon />
              </div>
              <div className="text-yellow-500 ">
                <StartIcon />
              </div>
            </div>
            <div className=" justify-start items-end gap-2 inline-flex">
              <div className="text-gray-700  font-bold ">Daniel Lane,</div>
              <div className="text-slate-400 text-sm  ">
                Developer
              </div>
            </div>
            <div className="h-2 justify-start items-start gap-2 inline-flex">
              <div className="w-4 h-2 bg-white rounded" />
              <div className="w-4 h-2 bg-gradient-to-br from-purple-400 to-blue-500 rounded" />
              <div className="w-4 h-2 bg-white rounded" />
              <div className="w-4 h-2 bg-white rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTestimonial;
