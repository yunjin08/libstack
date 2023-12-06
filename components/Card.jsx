import React from "react";

function Card({ data, handleDelete }) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex relative">
        {/*BackDrop */}
        <div className="absolute bottom-[-1rem] -left-[1rem]    w-[23rem] h-[24rem] bg-[#FAEED1]  rounded-xl z-[0]" />
        <div className="flex relative  flex-col text-[#333333]  items-center  w-[23rem] h-[24rem] bg-[#DED0B6] rounded-xl ">
          <h1 className="text-4xl font-bold mt-6">Book</h1>
          <div className="flex flex-col text-[#333333] w-full mt-3 items-center  space-y-4 ">
            <div className="text-[1.5rem] font-semibold pt-5">{`Title:${" "}${
              data.title
            }`}</div>
            <div className="text-[1.5rem] font-semibold">
              {" "}
              {`Author:${" "}${data.author}`}
            </div>
            <div className="text-[1.5rem] font-semibold">
              {" "}
              {`Page:${" "}${data.page}`} Pages
            </div>
          </div>
          <div className="px-6"></div>
          <div className="pb-5 w-full flex items-center justify-center">
            <button
              className="absolute bottom-10 bg-[#BBAB8C] w-[85%] text-2xl font-medium rounded-md py-4 "
              onClick={handleDelete}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
