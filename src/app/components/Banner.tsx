import Image from "next/image";
import React from "react";
import PaperBg from "../../../public/banner.jpg";
import BooksImage from "../../../public/books.png";

const Banner = () => {
  return (
    <div className="py-10">
      <div className="relative">
        <Image
          src={PaperBg}
          alt="Book backgound image"
          className="h-80 w-full rounded-lg object-cover object-center"
          height={0}
          width={0}
          sizes="100vw"
        />
        <div className=" absolute inset-0 h-full w-full rounded-lg bg-gray-950 bg-opacity-50">
          <Image
            src={BooksImage}
            alt="Png books image"
            className="absolute bottom-0 right-5"
            height={0}
            width={0}
            sizes="100vw"
            style={{ width: "auto", height: "18rem" }}
          />
          <h3 className="absolute left-10 top-1/2 w-full max-w-3xl -translate-y-1/2 text-5xl font-semibold tracking-tight text-white capitalize">
            connect, share and trade your favourite reads...
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
