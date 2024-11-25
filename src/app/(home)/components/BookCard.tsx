import { Book } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="flex gap-5 border p-3 shadow-md rounded-md hover:shadow-xl transition-all">
      <Image
        src={book.image}
        alt={book.title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", maxWidth: "100px", height: "9rem" }}
      />
      <div>
        <h2 className="line-clamp-2 text-lg font-bold text-primary-600 text-balance">
          {book.title}
        </h2>
        <p className="line-clamp-2 font-bold text-primary-900">
          {book.authors}
        </p>
        <Link
          className="py-2 px-3 rounded-md border border-primary-500 mt-2 inline-block text-primary-600 font-medium text-sm hover:bg-primary-100 hover:border-primary-100 transition-all"
          href={`/book/${book.id}`}
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
