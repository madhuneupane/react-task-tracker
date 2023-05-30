import Task from "./Task";
function Tasks({ tasks, onInActivate, onToggle }) {
  return (
    <>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onInActivate={onInActivate}
          onToggle={onToggle}
        />
      ))}
    </>
  );
}

export default Tasks;
