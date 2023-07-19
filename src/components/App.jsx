import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea, { item } from "./CreateArea";
function App() {
  const [item, addItem] = useState([]);
  function addNote(note) {
    addItem((prev) => {
      return [...prev, note];
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {item.map((notes, index) => (
        <Note
          title={notes.title}
          content={notes.content}
          key={index}
          id={index}
          addnotes={addItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
