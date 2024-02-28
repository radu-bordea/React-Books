import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

function BookList({ books, onDelete, onEdit }) {
  const {count, incrementCount} = useContext(BooksContext);

  // Map over the array of books to render each book component
  const renderBooks = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
    );
  });

  // Return a div containing the list of rendered book components
  return (
    <div className="book-list">
      {count}
      <button onClick={incrementCount}>Click</button>
      {renderBooks}
    </div>
  );
}

export default BookList;
