"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import PopUp from "@/components/PopUp";
import Card from "@/components/Card";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Page() {
  const router = useRouter();
  const { data: session } = useSession();
  const [allBooks, setAllBooks] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [isDefault, toNotDefault] = useState(true);
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
        toNotDefault(false);
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
            {isDefault ? (
              <div className="text-2xl 2xl:text-2xl font-bold js-button">
                Login to add a Book
              </div>
            ) : (
              <button
                className="text-3xl 2xl:text-4xl font-bold js-button"
                onClick={handlingPopUp}
              >
                + Add Book
              </button>
            )}
          </div>
        </div>
        <div
          id="content"
          className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-3 jsContent mb-12 "
        ></div>
      </div>
      {console.log(allBooks)}
      {session && (
        <div>
          {allBooks && allBooks.length > 0 ? (
            <div className="grid grid-cols-1 bld:grid-cols-2 z-0 2xl:grid-cols-3 gap-y-10">
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
            <p className="text-xl text-black">No books available, add now!</p>
          )}
        </div>
      )}

      {!session && (
        <div className="flex w-full items-center justify-center flex-col-reverse xl:flex-row">
          <Image src="/books.jpg" alt="book" width={680} height={680} />

          <div className=" xl:w-[40%] xl:pl-10 w-[80%] flex flex-col h-full item-center justify-center mb-10 xl:mb-0">
            <h1 className=" text-[1.8rem] md:text-[2rem] 2xl:text-4xl font-bold  text-center  mb-5">
              Library Stack
            </h1>
            <p className="text-xl text-justify w-full indent-5">
              Welcome to our specialized reading management website, designed to
              serve as your personal hub for organizing and tracking your
              reading journey. Tailored for book enthusiasts, this platform
              empowers you to seamlessly store and manage details about the
              books in your collection.
            </p>
            <p className="indent-5 text-xl text-justify pt-5">
              With a user-friendly interface, our website allows you to input
              essential information such as title, author, and number of pages
              for each book, ensuring a comprehensive catalog of your literary
              treasures. Keep a watchful eye on your reading list, track your
              progress effortlessly, and never lose sight of the captivating
              stories waiting to be explored.
            </p>
          </div>
        </div>
      )}

      {/*Pop Up for Entry */}
      {popUp && <PopUp setPopUp={setPopUp} />}
    </section>
  );
}

export default Page;
