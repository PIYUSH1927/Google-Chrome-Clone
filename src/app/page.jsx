import HomeHeader from "../components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <HomeHeader />

      {/* body */}

      <div className="flex flex-col items-center mt-24">
        <Image
          width="300"
          height="100"
          src="https://cdn2.downdetector.com/static/uploads/logo/Google-new_19.png"
        />

        <HomeSearch/>
      </div>
    </>
  );
}
