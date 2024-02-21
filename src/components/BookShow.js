import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onEdit, onDelete }) {
  // State to manage whether to show the edit form or not
  const [showEdit, setShowEdit] = useState(false);

  // Function to toggle the display of the edit form
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  
  // Function to handle delete button click
  const handleDeleteClick = () => {
    onDelete(book.id);
  };
  
  // Function to handle form submission from the edit form
  const handleSubmit = (id, newTitle) => {
    setShowEdit(false); // Hide the edit form after submission
    onEdit(id, newTitle); // Call the onEdit function passed from the parent component
  };
  
  // Determine the content to render based on whether showEdit is true or false
  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  // Render the book details along with edit and delete buttons
  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
      {content}
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
