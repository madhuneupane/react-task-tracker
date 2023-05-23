import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "yo yo",
      day: "April 20 1996",
      reminder: false,
    },
  ]);
  return (
    <div className="container">
      <Header title="Task Tracker"></Header>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
