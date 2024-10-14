import React from "react";
import inputLogo from "../assets/images/input-logo.png"

const Input = () => {
  return (
    <div className="w-full p-5 border text-left bg-white border-gray-200 rounded-lg mx-auto relative">
        <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <img src={inputLogo} alt="" />
                <h1 className="font-bold">INPUT</h1>
            </div>
            <div className="bg-gray-500 rounded-full p-[6px]"></div>
        </div>
        <p className="block -mx-5 left-0 right-0 bg-blue-100 py-3 my-3 text-center text-[14px] text-gray-500">
            Write the input/ question you want to ask
        </p>
        <label className="font-medium">Input</label>
        <input
            type="text"
            placeholder="Type Something..."
            className="w-full p-1 px-3 my-2 border border-gray-300 rounded placeholder:text-sm focus:outline-none focus:ring-2"
        />
    </div>
  );
};


export default Input