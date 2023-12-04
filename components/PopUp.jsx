import React from "react";

function PopUp() {
  return (
    <div
      id="overlay"
      class="fixed h-full w-full inset-0 bg-black bg-opacity-80  hidden"
    >
      <div
        id="popup"
        class="absolute flex-col rounded-xl border-4 space-y-5 bg-gray-200 w-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden"
      >
        <h1 class="flex items-center justify-center mt-8 mb-2 text-3xl font-bold">
          Add New Book
        </h1>
        <div class="flex justify-center">
          <input
            type="text"
            placeholder="Title"
            class="text-2xl py-1 pl-1 rounded-md w-72 jsTitle"
          />
        </div>
        <div class="flex justify-center">
          <input
            type="text"
            placeholder="Author"
            class="text-2xl py-1 pl-1 rounded-md w-72 jsAuthor"
          />
        </div>
        <div class="flex justify-center">
          <input
            type="number"
            placeholder="Pages"
            class="text-2xl py-1 pl-1 rounded-md w-72 jsPages"
          />
        </div>
        <div class="flex items-center justify-center">
          <p class="text-xl font-medium py-2"> Have you read it?</p>
          <div class="pt-1 pl-1">
            <input type="checkbox" value="Yes" id="readBook" />
          </div>
        </div>
        <div class="flex items-center justify-center">
          <button class="mb-6 bg-green-300 w-72 rounded-md py-3 text-xl font-medium jsSubmit">
            {" "}
            Submit{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
