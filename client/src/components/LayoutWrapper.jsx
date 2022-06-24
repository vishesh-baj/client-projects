import React from "react";
import { GrFormClose } from "react-icons/gr";
const LayoutWrapper = ({ children }) => {
  return (
    <div>
      <div className="drawer h-full font-montserrat">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <div className="w-full z-50 navbar bg-white/90 fixed  text-black ">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">Disha Helpline</div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                <li>
                  <a href="/">Services</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Testimonials</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Content */}

          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu py-20 overflow-y-auto w-80 bg-sky-600/90">
            {/* TEXT XCOLOR NOT CHANGING */}
            <GrFormClose
              className="absolute -right-10 text-white top-5"
              size={40}
            />

            <li className="bg-sky-400 text-white text-lg">
              <a href="/">Services</a>
            </li>
            <li className="bg-sky-400 text-white text-lg">
              <a href="/">About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LayoutWrapper;
