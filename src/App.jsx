import React from "react";
import Navbar from "./component/NAvbar";
import Corousel from "./component/Corousel";
import Services from "./component/Services";
import Hero from "./component/Hero";
import Hero2 from "./component/Hero2";
import Research from "./component/Research";
import ContactUs from "./component/ContactUs";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Corousel />
      <Services />
      <Hero />
      <Hero2 />
      <Research />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
