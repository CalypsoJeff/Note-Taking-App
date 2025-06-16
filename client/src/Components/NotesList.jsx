const NotesList = ({ notes }) => {
  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <div key={note._id} className="p-4 border rounded shadow">
          <h2 className="text-xl font-bold">{note.title}</h2>
          <p className="text-gray-700">{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
