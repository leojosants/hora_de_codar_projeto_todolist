import { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput/TaskInputComponent.jsx";
import TaskList from "./components/TaskList/TaskListComponent.jsx";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

  useEffect(
    () => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]
  );

  const addTask = (task) => {
    setTasks(
      [
        ...tasks,
        {
          id: Date.now(),
          text: task,
          done: false
        }
      ]
    );
  };

  const deleteTask = (taskObj) => {
    setTasks(
      tasks.filter(
        (task) => task.id !== taskObj.id
      )
    );
  };

  const toggleTaskDone = (taskId) => {
    setTasks(
      tasks.map(
        (task) => task.id === taskId
          ? { ...task, done: !task.done }
          : task
      )
    );
  };

  return (
    <>
      <h1>
        Lista de Tarefas
      </h1>

      <TaskInput
        onAddTask={addTask}
      />

      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleTaskDone={toggleTaskDone}
      />
    </>
  );
}

export default App;