import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href={"/"}>
          <Image
            width="120"
            height="40"
            src="https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png"
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2 ">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
 
        <button className="bg-orange-500 text-lg rounded-full text-white px-3 py-1 ml-2 font-medium hover:brightness-105 hover:shadow-md transition-shadow">P</button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
