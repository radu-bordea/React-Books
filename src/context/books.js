import { createContext, useState, useCallback } from "react";
import axios from "axios";

// Creating a context for managing books
const BooksContext = createContext();

// Context provider component
function Provider({ children }) {
  // State to store the list of books
  const [books, setBooks] = useState([]);

  // Function to fetch books from the server
  const fetchBooks = useCallback( async () => {
    try {
      const response = await axios.get("http://localhost:3001/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }, []);


  // Function to create a new book
  const createBook = async (title) => {
    try {
      const response = await axios.post("http://localhost:3001/books", {
        title,
      });
      const updatedBooks = [...books, response.data];
      setBooks(updatedBooks);
    } catch (error) {
      console.error("Error creating book:", error);
    }
  };

  // Function to edit a book by its ID
  const editBookById = async (id, newTitle) => {
    try {
      const response = await axios.put(`http://localhost:3001/books/${id}`, {
        title: newTitle,
      });
      const updatedBooks = books.map((book) => {
        if (book.id === id) {
          return { ...book, ...response.data };
        }
        return book;
      });
      setBooks(updatedBooks);
    } catch (error) {
      console.error("Error editing book:", error);
    }
  };

  // Function to delete a book by its ID
  const deleteBookById = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/books/${id}`);
      const updatedBooks = books.filter((book) => book.id !== id);
      setBooks(updatedBooks);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  // Object containing values to share via context
  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };

  // Providing the context value to its children
  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

// Exporting the context provider and the context itself
export { Provider };
export default BooksContext;
