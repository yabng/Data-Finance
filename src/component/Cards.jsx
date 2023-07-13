import React from "react";
import single from "../../src/assets/single.png";
import double from "../../src/assets/double.png";
import triple from "../../src/assets/triple.png";
function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {/* first card */}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={single}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storgae</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 gb</p>
          </div>
          <button className=" text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3">Start Trial</button>
        </div>

         {/* sec card */}
         <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white bg-transparent"
            src={double}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storgae</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 gb</p>
          </div>
          <button className=" bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3">Start Trial</button>
        </div>

         {/* thierd card */}
         <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={triple}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storgae</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 gb</p>
          </div>
          <button className=" text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3">Start Trial</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
