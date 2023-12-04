import React from "react";

function Page() {
  return (
    <section className="bg-[#FDF7E4]">
      <div className="w-full h-full ">
        <div
          id="add"
          className="container w-full h-full flex items-center justify-center mx-auto"
        >
          <div>
            <button className="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-bold js-button">
              + Add Book{" "}
            </button>
          </div>
        </div>
        <div
          id="content"
          className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-3 jsContent mb-12 "
        ></div>
      </div>
    </section>
  );
}

export default Page;
