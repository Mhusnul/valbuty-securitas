import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="relative z-10">
      <div className="navbar bg-base-100 shadow-lg md:px-25 pb-5 fixed ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a> Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 text-black font-semibold text-lg">
            <li>
              <a className="hover:text-yellow-500 hover:bg-transparent dropdown dropdown-hover ">
                About Us
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <a>Company Overview</a>
                  </li>
                  <li>
                    <a>Vision, Mission & Core Values</a>
                  </li>
                  <li>
                    <a>Management</a>
                  </li>
                  <li>
                    <a>Corporate Governance</a>
                  </li>
                  <li>
                    <a>Career</a>
                  </li>
                </ul>
              </a>
            </li>
            <li>
              <a className="hover:text-yellow-500 hover:bg-transparent dropdown dropdown-hover">
                Services
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <a> Brokerage</a>
                  </li>
                  <li>
                    <a>Investment Banking</a>
                  </li>
                  <li>
                    <a>Mutual Fund</a>
                  </li>
                  <li>
                    <a>Fixed Income</a>
                  </li>
                </ul>
              </a>
            </li>
            <li>
              <a className="hover:text-yellow-500 hover:bg-transparent ">
                Research
              </a>
            </li>
            <li>
              <a className="hover:text-yellow-500 hover:bg-transparent">
                Information
              </a>
            </li>
            <li>
              <a className="hover:text-yellow-500 hover:bg-transparent ">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="bg-yellow-500 px-5 py-2 font-semibold rounded-tr-xl rounded-bl-xl hover:bg-yellow-400 hover:cursor-pointer">
            Open Account
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
