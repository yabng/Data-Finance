import React from "react";

const Newletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 mt-[5%]">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            What tips & ricks to timize or flow?
          </h1>
          <p>sing up to our newletter and sty up to date.</p>
        </div>
        <div className="py-4 ">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className=" text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3">
              Notify me
            </button>
          </div>
          <p>
            We care about the rotection of your data. Read our
            <span className="text-[#00df9a] underline"> pricacy policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newletter;
