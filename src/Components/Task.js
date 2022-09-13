import React from "react";

export default function Task({ title, description, deleteNote, index }) {
  return (
    <div className="task">
      <div>
        <p>{title}</p>
        <span>{description}</span>
      </div>

      <button onClick={() => deleteNote(index)}>-</button>
    </div>
  );
}
