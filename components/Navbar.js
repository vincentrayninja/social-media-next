import React, { useState } from "react";
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#120E43] mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex gap-4 items-center" >
              <img
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                width="35"
              />
              <h5 className="text-[#4DD637] hover:text-[#95fc41] antialiased hover:subpixel-antialiased uppercase font-bold" >Social Media</h5>
            </div>
            
            <button
              className="text-[#4DD637] cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z" />
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/* <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-[#4DD637] hover:opacity-75 hover:text-[#95fc41]"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-[#4DD637] opacity-75"></i>
                  <span className="ml-2">Share</span>
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-[#4DD637] hover:opacity-75 hover:text-[#95fc41]"
                  href="#pablo"
                >
                  {/* <i className="fab fa-twitter text-lg leading-lg text-[#4DD637] opacity-75 hover:text-[#95fc41]"></i> */}
                  <span className="ml-2">Login</span>
                </a>
              </li>
              {!navbarOpen ? (
                <li className="nav-item ">
                  <span className="ml-2 text-[#4DD637]">|</span>
                </li>
              ) : (
                ""
              )}

              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-[#4DD637] hover:opacity-75 hover:text-[#95fc41]"
                  href="#pablo"
                >
                  <span className="ml-2">Register</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
