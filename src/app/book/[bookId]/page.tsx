import { Book } from "@/types";
import Image from "next/image";
import React from "react";
import DownloadButton from "./components/DownloadButton";

const SingleBookPage = async ({ params }: { params: { bookId: string } }) => {
  const { bookId } = await params;
  let book: Book | null = null;
  try {
    const response = await fetch(`${process.env.BASE_URL}/book/${bookId}`);
    if (!response.ok) {
      throw new Error("Error fetching book");
    }
    book = await response.json();
  } catch (error: any) {
    throw new Error(`Error fetching book: ${error}`);
  }

  if (!book) {
    throw new Error("Book not found");
  }

  return (
    <div className="mx-auto grid grid-cols-3 gap-10 py-10 px-3 max-w-7xl">
      <div className="col-span-2 pr-16 text-primary-950">
        <h2 className="mb-5 text-5xl font-bold leading-[1.1]">{book.title}</h2>
        <span className="font-semibold">by {book.authors}</span>
        <p className="mt-5 text-lg leading-8">{book.subtitle}</p>
        <DownloadButton fileLink={book.url} />
      </div>
      <div className="flex justify-end">
        <Image
          src={book.image}
          alt={book.title}
          className="rounded-md-border border"
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: "auto", height: "400px" }}
        />
      </div>
    </div>
  );
};

export default SingleBookPage;
