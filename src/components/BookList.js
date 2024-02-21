import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  // Map over the array of books to render each book component
  const renderBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />;
  });

  // Return a div containing the list of rendered book components
  return <div className="book-list">{renderBooks}</div>;
}

export default BookList;
