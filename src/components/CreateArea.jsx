import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState([
    {
      title: "",
      content: ""
    }
  ]);
  function NoteAdd(event) {
    const { value, name } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }
  function addNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={addNote}>
        <input
          onChange={NoteAdd}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={NoteAdd}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
