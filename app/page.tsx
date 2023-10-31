"use client";

import SearchBar from "./components/searchBar";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <main>
      <NextUIProvider>
        <div className=" py-16 flex items-center justify-center ">
          <div className="  items-center justify-center w-[800px]  ">
            <h1 className="text-center text-3xl font-bold p-2 ">
              Find the perfect online course for you
            </h1>

            <h2 className="text-center text-xl text-gray-400 ">
              Instant search for 50,000+ courses on the web.We have collected
              the best online courses from the biggest platforms and put them
              together for you
            </h2>
            <div className=" flex-auto  py-96">
              <div>
                <SearchBar />
              </div>
            </div>
          </div>
          {/* <Link href="/login">Login Page</Link> */}
        </div>
      </NextUIProvider>
    </main>
  );
}
