import ButtonShadow from "@/components/ButtonShadow";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container max-w-6xl  mx-auto">
      {" "}
      <div className="w-full flex">
        <div className="flex flex-[1] justify-start items-center  ">
          <div className="">
            <div className=" text-purple-400 text-[3.2rem] font-bold ">
              Bootstrap 5 theme
            </div>
            <div className="">
              <span className="text-slate-600 text-[2.5rem] font-normal ">
                crafted by{" "}
              </span>
              <span className="text-slate-600 text-[2.5rem] font-bold  leading-[48px]">
                ThemeWagon
              </span>
            </div>
            <div className="w-[461px] text-slate-500 text-base font-normal  leading-snug">
              ThemeWagon offers an wide array of category-oriented <br />
              Free and Premium Bootstrap HTML Templates and Themes.{" "}
            </div>
            <ButtonShadow text="Check Demo" className="mt-10"/>
          </div>
        </div>
        <div className="flex-[2]">
          <Image
            src={"/images/illustration1.png"}
            className="w-full"
            alt="ilustration1"
            width={500}
            height={300}
          />
        </div>
      </div>
      <div className="w-full h-20x my-20 bg-gradient-to-r  from-white via-[rgba(157,131,250,0.3)] to-white   p-[2px]  rounded-full ">
        <div className="w-full h-full  bg-slate-100 flex place-content-between py-20">
          <div className="grid justify-items-left  items-center">
            <Image
              src="/images/home/google.png"
              width={300}
              className="w-3/4 "
              height={100}
              alt=""
            />
          </div>
          <div className="grid justify-items-center items-center">
            <Image
              src="/images/home/netflix.png"
              width={300}
              className="w-3/4 "
              height={100}
              alt=""
            />
          </div>
          <div className="grid justify-end justify-items-center  items-center">
            <Image
              src="/images/home/microsoft.png"
              width={300}
              className="w-3/4 "
              height={100}
              alt=""
            />
          </div>
          <div className="grid justify-end justify-items-center items-center">
            <Image
              src="/images/home/mailbuster.png"
              width={300}
              className="w-3/4 "
              height={100}
              alt=""
            />
          </div>
          <div className="grid justify-items-end items-center">
            <Image
              src="/images/home/themewagon.png"
              width={300}
              className="w-3/4 "
              height={100}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
