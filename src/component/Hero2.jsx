import React from "react";

function Hero2() {
  return (
    <section className='gap-5 md:flex justify-center min-h-screen bg-[url("https://www.kbvalbury.com/cfind/source/thumb/images/cover_w1440_h712_bg-content-aside.jpg")] bg-cover'>
      <div className="content-center">
        <img
          src="https://www.kbvalbury.com/cfind/source/thumb/images/cover_w547_h619_homepageara1-01.png"
          alt=""
        />
      </div>
      <div className="content-center text-center pb-10 md:text-start">
        <p className="text-gray-600 font-semibold mb-3">
          ONLINE TRADING APPLICATION
        </p>
        <h1 className="text-4xl font-semibold mb-5">
          #SMARTINVESTING with KB ARA
        </h1>
        <p className="text-gray-600 font-semibold mb-3">
          Your Tools for Better Investment Decision
        </p>
        <button className=" bg-yellow-500 px-7 py-3 text-lg font-semibold rounded-tr-xl rounded-bl-xl hover:bg-yellow-400 hover:cursor-pointer">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Hero2;
