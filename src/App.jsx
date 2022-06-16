import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Container from "./components/COntainer";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";

function App() {
  const [tasksItems, setTasksItems] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [showCompleted, setShowCompleted] = useState(false);

  const createNewTask = (taskName) => {
    if (tasksItems.find((task) => task.name === taskName)) return;
    const newTask = { id: Math.random(), name: taskName, done: false };

    setTasksItems([...tasksItems, newTask]);
  };

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((taskItem) =>
        taskItem.id === task.id
          ? { ...taskItem, done: !taskItem.done }
          : taskItem
      )
    );
  };

  const cleanTasks = (task) => {
    setTasksItems(tasksItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <main className="bg-dark vh-100 text-white ">
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        {tasksItems.length > 0 ? (
          <>
            <TaskTable
              tasks={tasksItems}
              toggleTask={toggleTask}
              title={"Tasks in Progress"}
            />
            <VisibilityControl
              isChecked={showCompleted}
              setShowCompleted={(checked) => setShowCompleted(checked)}
              cleanTasks={cleanTasks}
            />
            {showCompleted && (
              <TaskTable
                tasks={tasksItems}
                toggleTask={toggleTask}
                showCompleted={showCompleted}
                title={"Tasks Completed"}
              />
            )}
          </>
        ) : (
          <h1>Sin tareas</h1>
        )}
      </Container>
    </main>
  );
}

export default App;
