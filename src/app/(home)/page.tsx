import Banner from "./components/Banner";
import BookList from "./components/BookList";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-3">
      <Banner />
      <BookList />
    </main>
  );
}
