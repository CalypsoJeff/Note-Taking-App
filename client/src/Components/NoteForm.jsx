import { useState } from "react";
import { createNote } from "../api/notesApi";

const NoteForm = ({ onNoteAdded }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) return;

    try {
      const newNote = await createNote({ title, content });
      onNoteAdded(newNote);
      setTitle("");
      setContent("");
    } catch (err) {
      console.error("Error adding note:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
