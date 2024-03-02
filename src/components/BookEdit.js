import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookEdit({ book, onSubmit }) {
  // State to store the title of the edited book
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  // Function to handle changes in the input field
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the onSubmit function passed from the parent component to submit the edited book
    onSubmit();
    editBookById(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      {/* Form to edit the title of the book */}
      <label>Title</label>
      {/* Input field to edit the title */}
      <input className="input" value={title} onChange={handleChange} />
      {/* Button to submit the form */}
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
