import React from "react";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import WhereToBuy from "./Components/WhereToBuy";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services/>
      <WhereToBuy/>
    </div>
  );
}
