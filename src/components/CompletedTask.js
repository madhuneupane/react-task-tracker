import { FaTimes, FaCheckCircle, FaCheck } from "react-icons/fa";
const CompletedTask = ({ completedTasks, onDelete, onReactivate }) => {
  return (
    <div>
      {completedTasks.map((task, index) => (
        <div key={index} className={`task ${task.reminder ? "reminder" : ""}`}>
          <h3>
            {task.text}
            <div className="icons">
              <FaCheck style={{ color: "green", cursor: "not-allowed" }} />
              <FaCheckCircle
                style={{ color: "green" }}
                onClick={() => onReactivate(task.id)}
              />
              <FaTimes
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => onDelete(task.id)}
              />
            </div>
          </h3>
          <p>{task.day}</p>
        </div>
      ))}
    </div>
  );
};

export default CompletedTask;
