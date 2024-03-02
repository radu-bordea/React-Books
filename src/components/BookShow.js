import { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }) {
  // State to manage whether to show the edit form or not
  const [showEdit, setShowEdit] = useState(false);

  // Accessing deleteBookById function from the books context
  const { deleteBookById } = useBooksContext();

  // Function to toggle the display of the edit form
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  // Function to handle delete button click
  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  // Function to handle form submission from the edit form
  const handleSubmit = () => {
    setShowEdit(false); // Hide the edit form after submission
  };

  // Determine the content to render based on whether showEdit is true or false
  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  // Render the book details along with edit and delete buttons
  return (
    <div className="book-show">
      {/* Display book image */}
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
      {/* Render the content (either book title or edit form) */}
      {content}
      {/* Display edit and delete buttons */}
      <div className="actions">
        {/* Button to toggle the display of the edit form */}
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        {/* Button to delete the book */}
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
