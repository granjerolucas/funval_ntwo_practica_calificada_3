import React from "react";
import LinksItems from "./LinksItems";
// /services
// /details
// /features
// /projects
// /team
// /testimonial
// /blog
// /contact
const Navbar = () => {
  return (
    <div className="w-full   justify-center items-center inline-flex bg-white">
      <div className="container max-w-6xl self-stretch flex-col justify-start items-start inline-flex">
        <div className="w-full  containerx  py-5 bg-gradient-to-r from-white via-white to-white backdrop-blur-3xl justify-between items-center inline-flex">
          <div className="justify-start items-center gap-16 flex">
            <div className="justify-center items-center gap-2 flex">
              <div className="w-8 h-7 relative"></div>
              <div className="text-purple-400 text-2xl font-extrabold  tracking-wide">
                Klean
              </div>
            </div>
            <ul className="justify-start items-start gap-8 flex">
              <LinksItems label="Home" />
              <LinksItems href="/services" label="Services" />
              {/* <LinksItems href="/features" label="Features" /> */}
              {/* <LinksItems href="/projects" label="Projects" /> */}
              {/* <LinksItems href="/team" label="Our Team" /> */}
              <LinksItems href="/testimonial" label="Works" />
              <LinksItems href="/blog" label="News" />
              <LinksItems href="/contact" label="Contact" />
            </ul>
          </div>
          <div className="justify-start items-start gap-4 flex">
            <button className="px-4 py-1.5 rounded-lg  text-blue-500 text-base font-bold">
              Log In
            </button>
            <button className="px-4 py-1.5 bg-white rounded-lg shadow  text-purple-400 text-base font-bold">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
