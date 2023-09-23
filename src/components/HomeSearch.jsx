"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
export default function HomeSearch() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input
         placeholder="Search Google or type a URL"
          type="text"
          className="flex-grow focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <BsFillMicFill className="text-lg" />
      </form>
       <div className="btn bg-transparent w-28 h-28 mt-5 hover:bg-gray-200">
      <div className="flex space-y-2 sm:space-y-0  sm:space-x-4 justify-center sm:flex-row mt-4 ">
        <button onClick={handleSubmit} className="btn w-12 h-12 rounded-full  text-3xl bg-zinc-100">
          +
        </button>
      </div>
      <div >
      <p className=" flex text-xs justify-center   mt-4 ">Add Shortcut</p>
      </div>
      </div>
    </>
  );
}
