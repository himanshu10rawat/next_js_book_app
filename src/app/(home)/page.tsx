import { Suspense } from "react";
import Banner from "./components/Banner";
import BookList from "./components/BookList";
import Loading from "@/components/Loading";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-3">
      <Banner />
      <Suspense fallback={<Loading />}>
        <BookList />
      </Suspense>
    </main>
  );
}
