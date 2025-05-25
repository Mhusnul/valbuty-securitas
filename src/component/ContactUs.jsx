import React from "react";

function ContactUs() {
  return (
    <section className=" bg-gradient-to-b from-yellow-50 to-white min-h-screen content-center   ">
      <div className=" bg-white mx-5 my-10 md:mx-28">
        <div className="md:flex md:flex-row-reverse text-center md:text-start md:px-24 py-7">
          <div>
            <img
              src="https://www.kbvalbury.com/cfind/source/thumb/images/cover_w665_h630_img-home-kontak.png"
              alt=""
            />
          </div>
          <div className="content-center my-5">
            <p className="text-yellow-500 font-semibold mb-3">HELPDESK</p>
            <h1 className="text-4xl font-semibold mb-5">
              Get Full Support from Our Team
            </h1>
            <p className="text-gray-600 font-semibold mb-3">
              We have a team that is ready to assist you in everything related
              to our services. Do not hesitate to contact us.
            </p>
            <button className=" bg-yellow-500 px-7 py-3 text-lg font-semibold rounded-tr-xl rounded-bl-xl hover:bg-yellow-400 hover:cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
