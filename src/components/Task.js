import { FaCheck } from "react-icons/fa";
function Task({ task, onInActivate, onToggle }) {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaCheck
          style={{ color: "gray", cursor: "pointer" }}
          onClick={() => onInActivate(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
