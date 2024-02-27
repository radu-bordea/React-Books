import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import "./index.css";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  // State to store the list of books
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Function to create a new book
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  // Function to edit a book by its ID
  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    console.log(response);

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data};
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  // Function to delete a book by its ID
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)

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
