import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

function BookList() {
  // Accessing the books array from the books context
  const { books } = useBooksContext();

  // Map over the array of books to render each book component
  const renderBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  // Return a div containing the list of rendered book components
  return <div className="book-list">{renderBooks}</div>;
}

export default BookList;
