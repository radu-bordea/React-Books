import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
  // State to store the title of the new book
  const [title, setTitle] = useState("");
  const { createBook } = useBooksContext();

  // Function to handle changes in the input field
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    // Clear the input field after submission
    setTitle("");
  };

  return (
    <div className="book-create">
      {/* Form to input the title of the new book */}
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        {/* Input field to enter the title */}
        <input className="input" value={title} onChange={handleChange} />
        {/* Button to submit the form */}
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
