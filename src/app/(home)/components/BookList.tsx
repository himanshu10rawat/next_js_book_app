import { Book } from "@/types";
import React from "react";
import BookCard from "./BookCard";

const BookList = async () => {
  //Data Fetching
  const response = await fetch(`${process.env.BASE_URL}/recent`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("An error occurred while fetching the data");
  }

  const { books } = await response.json();

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-10">
      {books.map((book: Book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
