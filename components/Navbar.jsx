"use client";
import React from "react";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();
  const [providers, setProviders] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <div id="head" className="border-b-[#DED0B6] border-2 bg-[#DED0B6]">
      <nav className="px-[6%] mx-auto flex h-28 items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl xl:text-5xl font-bold">
            library
          </h1>
        </div>
        {/*Desktop Navigation */}
        <div>
          {session?.user ? (
            <div className="flex gap-3 md:gap-5 items-center justify-center">
              <Link
                href="/"
                type="button"
                onClick={() => {
                  signOut({ redirect: false }).then(() => {
                    router.push("/"); // Redirect to the dashboard page after signing out
                  });
                }}
                className="font-sans text-md sm:text-xl xl:text-xl border-2 py-1 sm:py-2 px-4 md:px-5 rounded-lg bg-[#BBAB8C] border-transparent"
              >
                Sign Out
              </Link>

              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full w-[2.8rem] h-[2.8rem]"
                alt="profile"
              />
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => {
                      signIn(provider.id);
                    }}
                    className="font-sans text-md sm:text-xl xl:text-2xl border-2 py-1 sm:py-2 px-4 md:px-5 rounded-lg bg-[#BBAB8C] border-transparent"
                  >
                    Sign in
                  </button>
                ))}
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
