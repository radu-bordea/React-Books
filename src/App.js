import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import "./index.css";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

function App() {
  // Accessing the fetchBooks function from the BooksContext
  const { fetchBooks } = useContext(BooksContext);

  // Fetch books from the server when the component mounts
  useEffect(() => {
    fetchBooks();
  }, []);

  // Render the main application
  return (
    <div className="app">
      {/* Header */}
      <h1>Reading List</h1>
      {/* Component to display the list of books */}
      <BookList />
      {/* Component to create a new book */}
      <BookCreate />
    </div>
  );
}

export default App;
