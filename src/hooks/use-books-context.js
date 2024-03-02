import { useContext } from "react";
import BooksContext from "../context/books";

// Custom hook to access the books context
function useBooksContext() {
  // Accessing the books context using useContext hook
  return useContext(BooksContext);
}

export default useBooksContext;
