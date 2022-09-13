import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Task from "./Task";

export default function Home() {
  const initialArr = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  const [tasks, setTasks] = useState(initialArr);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title !== "" || description !== "") {
      setTasks([...tasks, { title, description }]);
    }

    setTitle("");
    setDescription("");
  };

  const deleteNote = (index) => {
    const filterTask = tasks.filter((value, i) => {
      console.log(value);
      console.log(i);
      return i !== index;
    });
    // console.log(filterTask);
    setTasks(filterTask);
  };

  // SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">ADD</button>
      </form>

      {tasks.map((item, index) => (
        <Task
          key={index}
          title={item.title}
          description={item.description}
          deleteNote={deleteNote}
          index={index}
        />
      ))}
    </div>
  );
}
