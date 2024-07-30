import { useState, useEffect } from "react";
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { GiRead } from "react-icons/gi";
import DeleteModal from "./Modals/BookDeleteModal";
import EditModal from "./Modals/EditBookModal";
import { IoAddCircle } from "react-icons/io5";
import AddBookModal from "./Modals/AddBookModal";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [openAddBook, setOpenAddBook] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [bookId, setBookId] = useState("");
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://backend-mini-project-45cj.vercel.app/api/books"
        );
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  const handleAdd = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const handleEdit = (updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book._id === updatedBook._id ? updatedBook : book
      )
    );
  };

  const handleEditClick = (book) => {
    setSelectedBook(book);
    setOpenEdit(true);
  };

  const handleDelete = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
  };

  return (
    <div>
      <div
        onClick={() => setOpenAdd(true)}
        className="flex justify-between items-center mb-4"
      >
        <h1>Books Record</h1>
        <div className="flex items-center justify-end gap-2 w-fit bg-green-500 px-3 py-1 rounded cursor-pointer">
          <IoAddCircle class="text-white text-xl" />
          <h1 className="text-xl text-white cursor-pointer">Books</h1>
        </div>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-gray-600">
              Title
            </th>
            <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-gray-600">
              Author
            </th>
            <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-gray-600">
              Genre
            </th>
            <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-gray-600">
              Quantity
            </th>
            <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left text-gray-600">
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr
              key={book._id}
              onClick={() => setBookId(book._id)}
              className="hover:bg-gray-100 cursor-pointer"
            >
              <td className="px-4 py-2 border-b border-gray-200">
                {book.title}
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                {book.author}
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                {book.genre}
              </td>
              <td className="px-4 py-2 border-b border-gray-200 text-center">
                {book.quantity}
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                <div className="flex gap-3">
                  {/* borrow book */}
                  <div className="cursor-pointer bg-green-700 p-2 rounded">
                    <GiRead color="white" />
                  </div>
                  {/* edit book */}
                  <div
                    onClick={() => handleEditClick(book)}
                    className="cursor-pointer bg-yellow-500 p-2 rounded"
                  >
                    <CiEdit color="white" />
                  </div>
                  {/* delete book */}
                  <div
                    onClick={() => setOpenDelete(true)}
                    className="cursor-pointer bg-red-700 p-2 rounded"
                  >
                    <MdDeleteForever color="white" />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <AddBookModal
        open={openAdd}
        onClose={() => setOpenAdd(false)}
        onAdd={handleAdd}
      />

      {/* delate modal */}
      <DeleteModal
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        bookId={bookId}
        onDelete={handleDelete} // Update the parent state on delete
      />
      {selectedBook && (
        <EditModal
          open={openEdit}
          onClose={() => setOpenEdit(false)}
          bookId={selectedBook._id}
          book={selectedBook}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
};

export default Books;
