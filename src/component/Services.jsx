import gov from "../assets/gov.png";
import man from "../assets/man.png";
function Services() {
  return (
    <div className="gap-5 px-20 my-10 justify-items-center md:flex relative py-32 content-center">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-yellow-50 rounded-bl-[70px] -z-10"></div>
      <div className="w-96 text-center md:text-start mx-5">
        <h2 className="text-yellow-500 font-semibold mb-2">OUR SERVICES</h2>
        <p className="text-4xl font-semibold mb-5">
          Providing best investment solutions that tailored to our Customer
          needs
        </p>
        <p className="text-gray-700 mb-5">
          As our aim to be your "lifelong investment partner", KB Valbury
          Sekuritas always strives to provide the best services and investment
          solutions through our branch networks and online service in Indonesia.
        </p>
      </div>
      <div className="group content-center px-7 h-96 w-96 bg-yellow-500 rounded-tr-[70px] rounded-bl-[70px] mb-5 my-5 hover:bg-white hover:cursor-pointer hover:shadow-2xl  transition duration-300 ease-in-out">
        <img className="h-32 mb-10 group-hover:hidden" src={gov} alt="" />
        <p className="font-semibold">Retail Brokerage</p>
        <p className="mb-5 text-sm text-gray-700">
          Discaveri the best investmen Opportunities in The Capital Market in
          The World
        </p>
        <p className="font-semibold flex hover:text-yellow-500">
          See Detail
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-right-icon lucide-arrow-right"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </p>
      </div>

      <div className="hover:text-black text-white group px-20 content-center h-96 w-96 bg-yellow-700 rounded-tr-[70px] rounded-bl-[70px] my-5 hover:bg-white hover:cursor-pointer hover:shadow-2xl transition duration-300 ease-in-out">
        <img className="h-32 mb-10 group-hover:hidden" src={man} alt="" />
        <p className="font-semibold ">Retail Brokerage</p>
        <p className="mb-5 text-sm text-gray-300">
          Discaveri the best investmen Opportunities in The Capital Market in
          The World
        </p>
        <p className="font-semibold flex hover:text-yellow-500 ">
          See Detail
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-arrow-right-icon lucide-arrow-right"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </p>
      </div>
    </div>
  );
}

export default Services;
