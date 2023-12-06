import React from "react";

function Card() {
  return (
    <div class="flex flex-col items-center justify-center">
      <div class="flex flex-col items-center justify-center bg-white space-y-4 mt-4 rounded-lg">
        <div class="text-2xl font-semibold pt-5">${book.title}</div>
        <div class="text-2xl font-semibold"> ${book.author}</div>
        <div class="text-2xl font-semibold"> ${book.page} Pages</div>
        <div class="px-6"></div>
        <div class="pb-5 px-6">
          <button
            class="bg-gray-300 w-22rem text-2xl font-medium rounded-md py-4 jsRemove"
            onclick="removeBook(${i})"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
