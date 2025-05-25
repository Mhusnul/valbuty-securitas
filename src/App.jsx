import React from "react";
import Navbar from "./component/NAvbar";
import Corousel from "./component/Corousel";
import Services from "./component/Services";
import Hero from "./component/Hero";

function App() {
  return (
    <div>
      <Navbar />
      <Corousel />
      <Services />
      <Hero />
    </div>
  );
}

export default App;
