import React from "react";

function Card({ data, handleDelete, handleEdit }) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex relative">
        {/*BackDrop */}
        <div className="absolute bottom-[-1rem] -left-[1rem]  w-[19rem] md:w-[21rem] xl:w-[23rem] h-[27rem] md:h-[28rem] xl:h-[29rem] bg-[#FAEED1]  rounded-xl z-[0]" />
        <div className="flex relative  flex-col text-[#333333]  items-center  w-[19rem] md:w-[21rem] xl:w-[23rem] h-[27rem] md:h-[28rem] xl:h-[29rem] bg-[#DED0B6] rounded-xl ">
          <h1 className="text-[1.8rem] md:text-[2rem] 2xl:text-4xl font-bold mt-6">
            Book
          </h1>
          <div className="flex flex-col text-[#333333] w-full mt-3 items-center  space-y-4 ">
            <div className="text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] font-semibold pt-5">{`Title:${" "}${
              data.title
            }`}</div>
            <div className="text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] font-semibold">
              {" "}
              {`Author:${" "}${data.author}`}
            </div>
            <div className="text-[1.3rem] md:text-[1.4rem] xl:text-[1.5rem] font-semibold">
              {" "}
              {`Page:${" "}${data.page}`} Pages
            </div>
          </div>
          <div className="px-6"></div>
          <div className="pb-5 w-full flex flex-col items-center justify-center">
            <button
              className="absolute bottom-[7rem] border-2 border-transparent bg-[#ccbc9b] w-[85%] text-2xl font-medium rounded-md py-2 md:py-3 xl:py-4 hover:border-[#8d7038]"
              onClick={() => handleEdit(data)}
            >
              Edit
            </button>
            <button
              className="absolute bottom-10 border-2 border-transparent  bg-[#BBAB8C] w-[85%] text-2xl font-medium rounded-md py-2 md:py-3 xl:py-4 hover:border-[#8d7038]"
              onClick={() => handleDelete(data)}
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
