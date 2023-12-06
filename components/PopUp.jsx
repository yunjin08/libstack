import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function PopUp({ setPopUp }) {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ title: "", author: "", page: "" });

  const handlingPopUp = () => {
    setPopUp(false);
  };

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/book/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          title: post.title,
          author: post.author,
          page: post.page,
        }),
      });

      if (response.ok) {
        setPopUp(false);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
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
        <form onSubmit={createPrompt} className="flex  flex-col gap-7">
          <div class=" flex justify-center">
            <input
              required
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              type="text"
              placeholder="Title"
              class="text-lg py-2 my-1 pl-1 rounded-md w-72 jsTitle bg-[#FDF7E4]"
            />
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              required
              placeholder="Author"
              value={post.author}
              onChange={(e) => setPost({ ...post, author: e.target.value })}
              class="text-lg py-2 my-1 pl-1 rounded-md w-72 bg-[#FDF7E4]"
            />
          </div>
          <div className="flex justify-center">
            <input
              required
              type="number"
              value={post.page}
              onChange={(e) => setPost({ ...post, page: e.target.value })}
              placeholder="Pages"
              class="text-lg py-2 pl-1 my-1 rounded-md w-72 bg-[#FDF7E4]"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              disabled={submitting}
              class="mt-1 mb-6 bg-[#BBAB8C] w-72 rounded-md py-3 text-xl font-medium"
            >
              {" "}
              {submitting ? "Submitting" : "Submit"}{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopUp;
