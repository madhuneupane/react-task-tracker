import { useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "yo yo",
      day: "April 20 1996",
      reminder: false,
    },
  ]);
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
}

export default Tasks;
