import React from "react";
import worldMap from "../../assets/world-map.png";

export default function WhereToBuy() {
  return (
    <div className="container my-36">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
        {/* form section */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-dark-gray font-serif">Buy our products from anywhere</h1>
          <div className="flex items-center gap-4">
            <input type="text" placeholder="Name" className="input-style w-full lg:w-[150px]"/>
            <input type="email" placeholder="Email" className="input-style w-full"/>
          </div>
          <div className="flex items-center gap-4">
            <input type="text" placeholder="Country" className="input-style w-full"/>
            <input type="text" placeholder="Zipcode" className="input-style w-full lg:w-[150px]"/>
          </div>
          <button className="primary-btn w-full">Order New</button>
        </div>
        {/* world map section */}
        <div className="col-span-2">
          <img src={worldMap} alt="" className="w-full sm:w-[500px] mx-auto" />
        </div>
      </div>
    </div>
  );
}
