import { useState } from "react";
import BookCreate from "./components/BookCreate";
import "./index.css";
import BookList from "./components/BookList";

function App() {
  // State to store the list of books
  const [books, setBooks] = useState([]);

  // Function to create a new book
  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };

  // Function to edit a book by its ID
  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  // Function to delete a book by its ID
  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      {/* Header */}
      <h1>Reading List</h1>
      {/* Component to display the list of books */}
      <BookList books={books} onEdit={editBookById} onDelete={deleteBookById} />
      {/* Component to create a new book */}
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
