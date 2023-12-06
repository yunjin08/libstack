"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import PopUp from "@/components/PopUp";
import Card from "@/components/Card";

function Page() {
  const { data: session } = useSession();
  const [allBooks, setAllBooks] = useState([]);
  const [popUp, setPopUp] = useState(false);

  const handlingPopUp = () => {
    setPopUp(true);
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
            <Card key={books._id} data={books} />
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
