import ButtonShadow from "@/components/ButtonShadow";
import Image from "next/image";

export default function Home() {
  return (
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
          <ButtonShadow text="Check Demo" />
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
  );
}
