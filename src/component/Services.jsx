import { Landmark } from "lucide";

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
      <div className="h-96 w-96 bg-yellow-500 rounded-tr-[70px] rounded-bl-[70px] mb-5 my-5 hover:bg-white hover:cursor-pointer hover:shadow-2xl  transition duration-300 ease-in-out"></div>
      <div className="h-96 w-96 bg-yellow-900 rounded-tr-[70px] rounded-bl-[70px] my-5 hover:bg-white hover:cursor-pointer hover:shadow-2xl transition duration-300 ease-in-out"></div>
    </div>
  );
}

export default Services;
