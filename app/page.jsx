"use client";
import { useState } from "react";
import PopUp from "@/components/PopUp";

function Page() {
  const [popUp, setPopUp] = useState(false);
  const [post, isPost] = useState(false);

  const handlingPopUp = () => {
    setPopUp(true);
  };

  return (
    <section className="bg-[#FDF7E4]">
      {/*Pop Up for Entry */}
      {popUp && <PopUp setPopUp={setPopUp} />}
      <div className="w-full h-full ">
        <div
          id="add"
          className="container w-full h-full flex items-center justify-center mx-auto"
        >
          <div>
            <button
              className="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-bold js-button"
              onClick={handlingPopUp}
            >
              + Add Book{" "}
            </button>
          </div>
        </div>
        <div
          id="content"
          className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-3 jsContent mb-12 "
        ></div>
      </div>
      {post ? (
        <p className="text-xl">There is a post</p>
      ) : (
        <p className="text-xl">There is no post</p>
      )}
    </section>
  );
}

export default Page;
