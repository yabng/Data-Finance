import React from "react";
import laptop from "../../src/assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto py-4" src={laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Mange Data Analytics Centrally</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perferendis, magni recusandae voluptas magnam, iusto maiores,
            numquam laudantium amet quae ea tenetur eaque. Reiciendis nisi iure
            dolor velit, placeat veniam consequuntur.
          </p>
          <button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:mx-0 bg-black">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
