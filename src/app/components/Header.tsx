import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="shadow-sm border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-3">
        <Link href={"/"} className="flex items-center">
          <Image
            src={"https://img.icons8.com/color/48/ibooks.png"}
            alt="ibooks"
            sizes="100vw"
            width={"40"}
            height={"40"}
          />
          <span className="text-primary-500 font-bold text-lg">Books App</span>
        </Link>
        <div className="flex items-center gap-2">
          <button className="h-10 rounded-md border border-primary-500 px-4 py-2 text-sm font-medium text-primary-500 transition-all hover:border-primary-100 hover:bg-primary-100 active:border-primary-200 active:bg-primary-200">
            Sign in
          </button>
          <button className="h-10 rounded-md border bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary-600 active:bg-primary-700">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
