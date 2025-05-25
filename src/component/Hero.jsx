import { Images } from "lucide";
import React from "react";

function Hero() {
  return (
    <section className="h-screen  flex justify-center ">
      <div className='text-center bg-[url("https://www.kbvalbury.com/cfind/source/thumb/images/cover_w1200_h480_bg-buka-rekening.jpg")] bg-cover w-6xl rounded-tr-4xl rounded-bl-4xl my-25 bg-center'>
        <div className="pt-10">
          <p className="text-gray-600 font-semibold mb-3">ACCOUNT OPENING</p>
          <h1 className="text-4xl font-semibold mb-5">Let's Get on Board!</h1>
          <p className="text-gray-600 font-semibold mb-3">
            Start your investing journey with us
          </p>
          <button className=" bg-yellow-800 text-white px-7 py-3 text-lg font-semibold rounded-tr-xl rounded-bl-xl hover:bg-yellow-400 hover:cursor-pointer">
            Registrasi Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
