import React from "react";
import ButtonShadow from "./ButtonShadow";
import CardItemsDatils from "./CardItemsDatils";

function Footer() {
  return (
    <>
      <div className="mt-10">
        <div className="container py-24 flex justify-center items-center mx-auto bg-[url('/images/footer/image1.png')] bg-cover bg-center text-center">
          <div className="px-36 w-3/4  ">
            <div className="text-center text-purple-400 text-[3.2rem] font-bold ">
              Exclusively by ThemeWagon
            </div>
            <div className=" text-center text-slate-500 text-base font-normal px-36  ">
              Klean is an elegant HTML5 template and a perfect starting point
              for your next SaaS oriented site, carefully curated by ThemeWagon
            </div>
            <ButtonShadow
              text="Download Free"
              rounded="full"
              className="mt-8"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-4 gap-4 ">
            <CardItemsDatils
              title="Abaout"
              items={["Prices", "About", "Services", "Career"]}
            />
            <CardItemsDatils
              title="Resources"
              items={["Terms", "Help", "Privacy"]}
            />
            <CardItemsDatils title="Team" items={["Developer", "Designer"]} />
            <CardItemsDatils
              title="Blog"
              items={["CEO", "Lifestyle", "Article", "Tech"]}
            />
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
            quaerat. Cupiditate earum officiis ducimus commodi at nesciunt
            sapiente blanditiis corporis harum explicabo molestiae voluptatibus
            similique, quae, dignissimos, aperiam reiciendis optio.
          </div>
        </div>
        <div className="h-1 border-b-2 border-slate-400"></div>
        <div className="py-10 w-full justify-between items-start inline-flex">
          <div className="justify-start items-center gap-2.5 flex">
            <div className="text-slate-400 text-base font-normal ">
              All rights Reserved
            </div>
            <div className="text-slate-400 text-base font-normal font-['Font Awesome 5 Free']">
              copyright
            </div>
            <div className="text-slate-500 text-base font-bold ">
              Your Company, 2021
            </div>
          </div>
          <div className="justify-start items-center gap-2 flex">
            <div>
              <span className="text-slate-400 text-base font-normal ">
                Made with{" "}
              </span>
              <span className="text-red-400 text-[13px] font-black ">
                
              </span>
              <span className="text-slate-400 text-[13px] font-normal ">️</span>
              <span className="text-slate-400 text-base font-normal "> by</span>
            </div>
            <div className="text-slate-500 text-base font-bold ">
              Themewagon
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
