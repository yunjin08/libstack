import React from "react";

function PopUp({ setPopUp }) {
  const handlingPopUp = () => {
    setPopUp(false);
  };
  return (
    <div class="fixed h-full w-full inset-0 bg-black bg-opacity-80 z-100">
      <div
        id="popup"
        class="absolute flex-col rounded-xl border-4 border-[#FAEED1] space-y-5 bg-[#DED0B6] h-[30rem] w-[22rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
      >
        <h1 class="flex relative items-center justify-center mt-8 mb-[2.5rem] text-4xl font-bold">
          Add New Book
          <i
            className="bx bx-minus absolute -top-[3rem] -right-[1rem] text-[#FAEED1] rounded-[1rem] text-4xl bg-[#BBAB8C] hover:cursor-pointer"
            onClick={handlingPopUp}
          ></i>
        </h1>
        <div class=" flex justify-center">
          <input
            type="text"
            placeholder="Title"
            class="text-xl py-2 my-1 pl-1 rounded-md w-72 jsTitle bg-[#FDF7E4]"
          />
        </div>
        <div class="flex justify-center">
          <input
            type="text"
            placeholder="Author"
            class="text-xl py-2 my-1 pl-1 rounded-md w-72 bg-[#FDF7E4]"
          />
        </div>
        <div class="flex justify-center">
          <input
            type="number"
            placeholder="Pages"
            class="text-xl py-2 pl-1 my-1 rounded-md w-72 bg-[#FDF7E4]"
          />
        </div>
        <div class="flex items-center justify-center">
          <p class="text-xl font-medium py-2"> Have you read it?</p>
          <div class="pt-1 pl-1 ">
            <input
              type="checkbox"
              value="Yes"
              id="readBook"
              className="bg-[#FDF7E4]"
            />
          </div>
        </div>
        <div class="flex items-center justify-center">
          <button class="mt-1 mb-6 bg-[#BBAB8C] w-72 rounded-md py-3 text-xl font-medium">
            {" "}
            Submit{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
