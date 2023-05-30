import CompletedTask from "./CompletedTask";
import { useState, useEffect } from "react";

const Completed = () => {
  //const location = useLocation();
  const [totalTask, setTotalTask] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();

      //Filter method is used to select only inactive tasks
      setTotalTask(
        tasksFromServer.filter(
          (individualTask) => individualTask.status === "inactive"
        )
      );
    };
    getTasks();
  }, []);

  //fetch tasks

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };
  //delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTotalTask(totalTask.filter((task) => task.id !== id));
  };

  //reactivate task

  const reActivate = async (id) => {
    const result = await fetch(`http://localhost:5000/tasks/${id}`);
    const taskToReactivate = await result.json();

    const updatedTask = { ...taskToReactivate, status: "active" };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setTotalTask(totalTask.filter((task) => task.id !== id));
  };

  return (
    <div>
      <CompletedTask
        completedTasks={totalTask}
        onDelete={deleteTask}
        onReactivate={reActivate}
      />
      {/* a tag is used to reload home page so that tasks can be fetched again */}
      <a href="/">Go Back</a>
    </div>
  );
};

export default Completed;
