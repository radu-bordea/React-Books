import { useState } from "react";
import BookCreate from "./components/BookCreate";
import "./index.css";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updateBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updateBooks);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
      <div>{books.length}</div>
    </div>
  );
}

export default App;
