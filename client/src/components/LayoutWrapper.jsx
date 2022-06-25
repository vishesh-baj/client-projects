import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-scroll";
const LayoutWrapper = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="drawer h-full font-montserrat">
        <input
          checked={toggle}
          id="my-drawer-3"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col ">
          <div className="w-full z-50 navbar bg-white/90 fixed  text-black ">
            <div className="flex-none lg:hidden">
              <label
                onClick={() => setToggle(!toggle)}
                htmlFor="my-drawer-3"
                className="btn btn-square btn-ghost"
              >
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
            <div className="flex-1 text-2xl font-semibold text-red-700 px-2 mx-2">
              <Link
                className="flex items-center cursor-pointer"
                to="hero"
                smooth={true}
                spy={true}
              >
                Disha Helpline{" "}
                <FaPlus className="ml-2 animate-pulse text-red-600" />
              </Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                <li>
                  <Link
                    className="font-semibold"
                    to="hero"
                    spy={true}
                    smooth={true}
                    activeClass="hero"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-semibold"
                    to="services"
                    spy={true}
                    smooth={true}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-semibold"
                    to="aboutus"
                    spy={true}
                    smooth={true}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-semibold"
                    to="contacts"
                    spy={true}
                    smooth={true}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Content */}

          {children}
        </div>
        <div className="drawer-side">
          <label
            onClick={() => setToggle(!toggle)}
            htmlFor="my-drawer-3"
            className="drawer-overlay"
          ></label>
          <ul className="menu py-20 overflow-y-auto w-80 bg-white/90">
            {/* TEXT XCOLOR NOT CHANGING */}

            <li className="bg-sky-400 text-black text-lg">
              <Link
                onClick={() => setToggle(!toggle)}
                spy={true}
                smooth={true}
                to="services"
              >
                Services
              </Link>
            </li>

            <li className="bg-sky-400 text-white text-lg">
              <Link
                onClick={() => setToggle(!toggle)}
                spy={true}
                smooth={true}
                to="aboutus"
              >
                About
              </Link>
            </li>
            <li className="bg-sky-400 text-white text-lg">
              <Link
                onClick={() => setToggle(!toggle)}
                spy={true}
                smooth={true}
                to="contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LayoutWrapper;
