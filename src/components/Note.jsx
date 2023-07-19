import React from "react";
import item from "./CreateArea";
function Note(props) {
  function deletefunc() {
    props.addnotes((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== props.id;
      });
    });
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deletefunc}></button>
    </div>
  );
}

export default Note;
