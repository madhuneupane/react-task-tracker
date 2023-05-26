import { useLocation } from "react-router-dom";
const Completed = () => {
  const location = useLocation();
  function filteredTasks() {
    const completedTasks = location.state.filter(
      (task) => task.status === "inactive"
    );
    return completedTasks;
  }
  const completedTasks = filteredTasks();

  return <div>yo</div>;
};

export default Completed;
