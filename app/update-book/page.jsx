"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const EditPrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ title: "", author: "", page: "" });

  useEffect(() => {
    const getBookDetails = async () => {
      const response = await fetch(`/api/book/${promptId}`);
      const data = await response.json();

      setPost({
        title: data.title,
        author: data.author,
        page: data.page,
      });
    };

    if (promptId) getBookDetails();
  }, [promptId]);

  const UpdatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!promptId) return alert("Prompt ID not found ");

    try {
      const response = await fetch(`/api/book/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: post.title,
          author: post.author,
          page: post.page,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <div class="fixed h-full w-full inset-0 bg-black bg-opacity-80 z-100">
        <div
          id="popup"
          class="absolute flex-col rounded-xl border-4 border-[#FAEED1] space-y-5 bg-[#DED0B6] h-[30rem] w-[22rem] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        >
          <h1 class="flex relative items-center justify-center mt-8 mb-[2.5rem] text-4xl font-bold">
            Editing Book
            <i
              className="bx bx-minus absolute -top-[3rem] -right-[1rem] text-[#FAEED1] rounded-[1rem] text-4xl bg-[#BBAB8C] hover:cursor-pointer"
              onClick={() => router.push("/")}
            ></i>
          </h1>
          <form onSubmit={UpdatePrompt} className="flex  flex-col gap-7">
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
            <div class="flex justify-center">
              <input
                type="text"
                placeholder="Author"
                value={post.author}
                required
                onChange={(e) => setPost({ ...post, author: e.target.value })}
                class="text-lg py-2 my-1 pl-1 rounded-md w-72 bg-[#FDF7E4]"
              />
            </div>
            <div class="flex justify-center">
              <input
                type="number"
                value={post.page}
                onChange={(e) => setPost({ ...post, page: e.target.value })}
                placeholder="Pages"
                required
                class="text-lg py-2 pl-1 my-1 rounded-md w-72 bg-[#FDF7E4]"
              />
            </div>

            <div class="flex items-center justify-center">
              <button
                type="submit"
                disabled={submitting}
                class="mt-1 mb-6 bg-[#BBAB8C] w-72 rounded-md py-3 text-xl font-medium"
              >
                {" "}
                {submitting ? "Editing" : "Edit"}{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditPrompt;
