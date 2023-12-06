"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import PopUp from "@/components/PopUp";
import Card from "@/components/Card";
import { useRouter } from "next/navigation";
import Update from "@/components/Update";

function Page() {
  const router = useRouter();
  const { data: session } = useSession();
  const [allBooks, setAllBooks] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [update, setUpdate] = useState(false);

  const handlingPopUp = () => {
    setPopUp(true);
  };

  const handlingUpdate = () => {
    setUpdate(true);
  };
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/user/${session?.user.id}/book`);

        const data = await response.json();

        setAllBooks(data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  {
    /*Handle Edit */
  }
  const handleEdit = (post) => {
    console.log("Edited");
    router.push(`/update-book?id=${post._id}`);
  };

  {
    /*Handle Delete Function */
  }
  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this post?");

    if (hasConfirmed) {
      try {
        await fetch(`/api/book/${post._id.toString()}`, {
          method: "DELETE",
        });
        const filteredPosts = allBooks.filter(
          (curpost) => curpost._id !== post._id
        );
        setAllBooks(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section className="bg-[#FDF7E4]">
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
      {allBooks ? (
        <div className="grid grid-cols-3 z-0 gap-y-10">
          {allBooks.map((books) => (
            <Card
              key={books._id}
              data={books}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              setUpdate={handlingUpdate}
            />
          ))}
        </div>
      ) : (
        <p className="text-xl">There is no post</p>
      )}
      {/*Pop Up for Entry */}
      {popUp && <PopUp setPopUp={setPopUp} />}
    </section>
  );
}

export default Page;
