import React from "react";
import Logo from "../assets/logo.png";
function Footer() {
  return (
    <section className="bg-gradient-to-t from-yellow-100 to-white  font-semibold">
      <div className="md:flex px-5 md:px-24 justify-between items-center py-5">
        <div className="w-sm">
          <img src={Logo} alt="Logo" className="h-18" />
          <a className="flex mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-map-pin-icon lucide-map-pin mr-3"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Sahid Sudirman Center 41st fl. Unit AC Jl. Jenderal Sudirman No. 86
            Jakarta Pusat 10220
          </a>
        </div>

        <p className="flex mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-mail-icon lucide-mail mr-3"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
          helpdesk@kbvalbury.com{" "}
        </p>
        <p className="flex mb-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-phone-icon lucide-phone mr-3"
          >
            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
          </svg>
          +62 21 250 98300
        </p>
      </div>

      <div className=" px-5 md:px-24 flex flex-wrap justify-start gap-5 md:gap-24 mb-5">
        <div className="flex flex-col">
          <p className="mb-5"> Online Trading System</p>
          <a href="" className="hover:text-gray-400 mb-3 text-gray-500">
            KB ARA MTS
          </a>
          <a href="" className="hover:text-gray-400 mb-3 text-gray-500">
            KB ARA HTS
          </a>
        </div>
        <div className="flex flex-col">
          <p className="mb-5"> Account Opening</p>
          <a href="" className="hover:text-gray-400 mb-3 text-gray-500">
            Online Registration
          </a>
          <a href="" className="hover:text-gray-400 mb-3 text-gray-500">
            Offline Registration
          </a>
        </div>

        <div className="">
          <p className="mb-5"> Download </p>
          <img
            src="https://ridecarta.com/wp-content/uploads/2017/10/google-play-button.png"
            alt="Google Play"
            className="w-32 mb-2    "
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS17Dlfop0XoXj0yd3Q_B_io3z4W6koxAOpYg&sa"
            alt="App Store"
            className="h-10 w-32 mb-2"
          />
          <img
            src="https://cdn.intheloop.io/wp-content/uploads/2020/08/windows-button.png"
            className="h-10 w-32 mb-2"
            alt=""
          />
        </div>
      </div>

      <div className=" flex flex-wrap gap-7 justify-center text-sm px-5">
        <p className="content-center">
          PT KB Valbury Sekuritas is registered and supervised by the Financial
          Services Authority
        </p>
        <a href="">
          <img
            src="https://www.kbvalbury.com/cfind/source/thumb/images/cover_w80_h80_logo-instansi-1.png"
            alt=""
          />
        </a>
        <a href="">
          <img
            src="https://www.kbvalbury.com/cfind/source/thumb/images/cover_w80_h80_logo-instansi-2.png"
            alt=""
          />
        </a>
        <a href="">
          <img
            src="https://www.kbvalbury.com/cfind/source/thumb/images/cover_w80_h80_logo-instansi-3.png"
            alt=""
          />
        </a>
        <a href="">
          <img
            src="https://www.kbvalbury.com/cfind/source/thumb/images/cover_w80_h80_logo-instansi-4.png"
            alt=""
          />
        </a>
        <a href="">
          <img
            src="https://www.kbvalbury.com/cfind/source/thumb/images/cover_w80_h80_logo-instansi-5.png"
            alt=""
          />
        </a>
      </div>

      <div className=" px-5 md:px-20 bg-amber-500 py-10 flex justify-between">
        <p>© 2023 KB Valbury Sekuritas. All rights reserved.</p>
        <div className="flex">
          <a href="">
            <img
              src="https://www.kbvalbury.com/cfind/source/images/icon-fb.svg"
              alt=""
            />
          </a>
          <a href="">
            <img
              src="https://www.kbvalbury.com/cfind/source/images/icon-tw.svg"
              alt=""
            />
          </a>
          <a href="">
            <img
              src="https://www.kbvalbury.com/cfind/source/images/icon-ig.svg"
              alt=""
            />
          </a>
          <a href="">
            <img
              src="https://www.kbvalbury.com/cfind/source/images/icon-yt.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
