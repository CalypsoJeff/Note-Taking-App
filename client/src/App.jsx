import { useEffect, useState } from "react";
import { getAllNotes } from "./api/notesApi";
import NoteForm from "./Components/NoteForm";
import NotesList from "./Components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const notesData = await getAllNotes();
        setNotes(notesData);
      } catch (err) {
        console.error("Error fetching notes:", err);
      } finally {
        setLoading(false); 
      }
    };

    fetchNotes();
  }, []);

  const addNote = (newNote) => {
    setNotes((prev) => [newNote, ...prev]);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Note Taking App</h1>

      <NoteForm onNoteAdded={addNote} />

      {loading ? (
        <p className="text-center text-gray-500">Loading notes...</p>
      ) : notes.length === 0 ? (
        <p className="text-center text-gray-500">
          No notes yet. Add your first one!
        </p>
      ) : (
        <NotesList notes={notes} />
      )}
    </div>
  );
};

export default App;
