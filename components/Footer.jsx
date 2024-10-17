import React from "react";
import ButtonShadow from "./ButtonShadow";
import CardItemsDatils from "./CardItemsDatils";

function Footer() {
  return (
    <>
      <div className="mt-10 bg-[url('/images/footer/image1.png')] bg-cover bg-center">
        <div className="container max-w-6xl  py-24 flex justify-center items-center mx-auto  text-center">
          <div className=" w-3/4  ">
            <div className="text-center text-purple-400 text-[3.2rem] font-bold ">
              Exclusively by ThemeWagon
            </div>
            <div className=" text-center text-slate-500  font-normal px-36  ">
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
      <div className="container max-w-6xl  mx-auto mt-6">
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-4 gap-4 ">
            <CardItemsDatils
              title="About"
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
          <div className="justify-self-end">
            <div className=" flex-col justify-start items-start gap-6 inline-flex">
              <div className="flex-col justify-start items-start gap-6 flex">
                <h3 className="text-slate-500 text-xl font-bold ">Follow Us</h3>
              </div>
              <div className="justify-start items-start gap-2 inline-flex">
                <div className="">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="35"
                      height="35"
                      rx="17.5"
                      stroke="url(#paint0_linear_2804_255)"
                    />
                    <path
                      d="M21.7188 19L22.1562 16.125H19.375V14.25C19.375 13.4375 19.75 12.6875 21 12.6875H22.2812V10.2188C22.2812 10.2188 21.125 10 20.0312 10C17.75 10 16.25 11.4062 16.25 13.9062V16.125H13.6875V19H16.25V26H19.375V19H21.7188Z"
                      fill="url(#paint1_linear_2804_255)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2804_255"
                        x1="0"
                        y1="0"
                        x2="43.4547"
                        y2="18.237"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#C381DB" />
                        <stop offset="1" stopColor="#4E92F9" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_2804_255"
                        x1="10"
                        y1="10"
                        x2="29.3132"
                        y2="18.1053"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#C381DB" />
                        <stop offset="1" stopColor="#4E92F9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="35"
                      height="35"
                      rx="17.5"
                      stroke="url(#paint0_linear_2804_257)"
                    />
                    <path
                      d="M25.3438 14.75C25.9688 14.2812 26.5312 13.7188 26.9688 13.0625C26.4062 13.3125 25.75 13.5 25.0938 13.5625C25.7812 13.1562 26.2812 12.5312 26.5312 11.75C25.9062 12.125 25.1875 12.4062 24.4688 12.5625C23.8438 11.9062 23 11.5312 22.0625 11.5312C20.25 11.5312 18.7812 13 18.7812 14.8125C18.7812 15.0625 18.8125 15.3125 18.875 15.5625C16.1562 15.4062 13.7188 14.0938 12.0938 12.125C11.8125 12.5938 11.6562 13.1562 11.6562 13.7812C11.6562 14.9062 12.2188 15.9062 13.125 16.5C12.5938 16.4688 12.0625 16.3438 11.625 16.0938V16.125C11.625 17.7188 12.75 19.0312 14.25 19.3438C14 19.4062 13.6875 19.4688 13.4062 19.4688C13.1875 19.4688 13 19.4375 12.7812 19.4062C13.1875 20.7188 14.4062 21.6562 15.8438 21.6875C14.7188 22.5625 13.3125 23.0938 11.7812 23.0938C11.5 23.0938 11.25 23.0625 11 23.0312C12.4375 23.9688 14.1562 24.5 16.0312 24.5C22.0625 24.5 25.3438 19.5312 25.3438 15.1875C25.3438 15.0312 25.3438 14.9062 25.3438 14.75Z"
                      fill="url(#paint1_linear_2804_257)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2804_257"
                        x1="0"
                        y1="0"
                        x2="43.4547"
                        y2="18.237"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#C381DB" />
                        <stop offset="1" stopColor="#4E92F9" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_2804_257"
                        x1="11"
                        y1="10"
                        x2="30.3132"
                        y2="18.1053"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#C381DB" />
                        <stop offset="1" stopColor="#4E92F9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="35"
                      height="35"
                      rx="17.5"
                      stroke="url(#paint0_linear_2804_259)"
                    />
                    <path
                      d="M14.125 24V14.6562H11.2188V24H14.125ZM12.6562 13.4062C13.5938 13.4062 14.3438 12.625 14.3438 11.6875C14.3438 10.7812 13.5938 10.0312 12.6562 10.0312C11.75 10.0312 11 10.7812 11 11.6875C11 12.625 11.75 13.4062 12.6562 13.4062ZM24.9688 24H25V18.875C25 16.375 24.4375 14.4375 21.5 14.4375C20.0938 14.4375 19.1562 15.2188 18.75 15.9375H18.7188V14.6562H15.9375V24H18.8438V19.375C18.8438 18.1562 19.0625 17 20.5625 17C22.0625 17 22.0938 18.375 22.0938 19.4688V24H24.9688Z"
                      fill="url(#paint1_linear_2804_259)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2804_259"
                        x1="0"
                        y1="0"
                        x2="43.4547"
                        y2="18.237"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#C381DB" />
                        <stop offset="1" stopColor="#4E92F9" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_2804_259"
                        x1="10"
                        y1="10"
                        x2="29.3132"
                        y2="18.1053"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#C381DB" />
                        <stop offset="1" stopColor="#4E92F9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div>
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="35"
                      height="35"
                      rx="17.5"
                      stroke="url(#paint0_linear_2804_261)"
                    />
                    <path
                      d="M26.1562 13.9062C25.9688 13.1562 25.375 12.5625 24.6562 12.375C23.3125 12 18 12 18 12C18 12 12.6562 12 11.3125 12.375C10.5938 12.5625 10 13.1562 9.8125 13.9062C9.4375 15.2188 9.4375 18.0312 9.4375 18.0312C9.4375 18.0312 9.4375 20.8125 9.8125 22.1562C10 22.9062 10.5938 23.4688 11.3125 23.6562C12.6562 24 18 24 18 24C18 24 23.3125 24 24.6562 23.6562C25.375 23.4688 25.9688 22.9062 26.1562 22.1562C26.5312 20.8125 26.5312 18.0312 26.5312 18.0312C26.5312 18.0312 26.5312 15.2188 26.1562 13.9062ZM16.25 20.5625V15.5L20.6875 18.0312L16.25 20.5625Z"
                      fill="url(#paint1_linear_2804_261)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2804_261"
                        x1="0"
                        y1="0"
                        x2="43.4547"
                        y2="18.237"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#C381DB" />
                        <stop offset="1" stopColor="#4E92F9" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_2804_261"
                        x1="10"
                        y1="10"
                        x2="29.3132"
                        y2="18.1053"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#C381DB" />
                        <stop offset="1" stopColor="#4E92F9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="text-slate-500 text-xl font-bold ">
                Subscribe to our newsletter
              </div>
              <div className=" rounded-full border-2 border-slate-200 bg-white px-4  justify-start items-center gap-1 flex">
                <span>
                  <svg
                    width="12"
                    height="9"
                    viewBox="0 0 12 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.0713 3.47852C10.5771 3.86523 9.9541 4.33789 7.7627 5.92773C7.33301 6.25 6.53809 6.95898 5.78613 6.95898C5.0127 6.95898 4.23926 6.25 3.78809 5.92773C1.59668 4.33789 0.973633 3.86523 0.479492 3.47852C0.393555 3.41406 0.286133 3.47852 0.286133 3.58594V7.96875C0.286133 8.54883 0.737305 9 1.31738 9H10.2549C10.8135 9 11.2861 8.54883 11.2861 7.96875V3.58594C11.2861 3.47852 11.1572 3.41406 11.0713 3.47852ZM5.78613 6.25C6.28027 6.27148 6.98926 5.62695 7.35449 5.36914C10.2119 3.30664 10.4268 3.11328 11.0713 2.59766C11.2002 2.51172 11.2861 2.36133 11.2861 2.18945V1.78125C11.2861 1.22266 10.8135 0.75 10.2549 0.75H1.31738C0.737305 0.75 0.286133 1.22266 0.286133 1.78125V2.18945C0.286133 2.36133 0.350586 2.51172 0.479492 2.59766C1.12402 3.11328 1.33887 3.30664 4.19629 5.36914C4.56152 5.62695 5.27051 6.27148 5.78613 6.25Z"
                      fill="#7E92B3"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Email"
                  className="px-2 h-10 bg-white outline-none"
                />
                <span>
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="28"
                      height="28"
                      rx="14"
                      stroke="url(#paint0_linear_2804_272)"
                    />
                    <path
                      d="M18.1855 15.2402C18.3789 15.0469 18.3789 14.7246 18.1855 14.5312L14.0176 10.3418C13.8027 10.1484 13.4805 10.1484 13.2871 10.3418L12.793 10.8359C12.5996 11.0293 12.5996 11.3516 12.793 11.5664L16.1016 14.875L12.793 18.2051C12.5996 18.4199 12.5996 18.7422 12.793 18.9355L13.2871 19.4297C13.4805 19.623 13.8027 19.623 14.0176 19.4297L18.1855 15.2402Z"
                      fill="url(#paint1_linear_2804_272)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_2804_272"
                        x1="0"
                        y1="0"
                        x2="35.0052"
                        y2="14.6909"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#C381DB" />
                        <stop offset="1" stopColor="#4E92F9" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_2804_272"
                        x1="9"
                        y1="8"
                        x2="24.692"
                        y2="14.5856"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#C381DB" />
                        <stop offset="1" stopColor="#4E92F9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1 mt-8 border-b-2 border-slate-200"></div>
        <div className="py-10 w-full justify-between items-start inline-flex">
          <div className="justify-start items-center gap-2.5 flex">
            <div className="text-slate-400  font-normal ">
              All rights Reserved
            </div>
            <div className="text-slate-400  font-normal font-['Font Awesome 5 Free']">
              copyright
            </div>
            <div className="text-slate-500  font-bold ">Your Company, 2021</div>
          </div>
          <div className="justify-start items-center gap-2 flex">
            <div>
              <span className="text-slate-400  font-normal ">
                Made with&nbsp;
              </span>
              <span className="text-red-400  font-black ">♥️</span>
              <span className="text-slate-400  font-normal "> by</span>
            </div>
            <div className="text-slate-500  font-bold ">Themewagon</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
