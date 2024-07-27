import AddTODO from "./TODO_components/AddTODO";
import AppName from "./TODO_components/AppName";
import "./App.css"
import ToDoItems from "./TODO_components/ToDoItems";
function App() {

  const todoItems = [
    {
      name: "Selfe Study",
      date: "13/05/2024",
    },
    {
      name: "Go to College",
      date: "19/06/2024", 
    },
    {
      name: "Go to Library",
      date: "21/06/2024", 
    },
  ];

  return (
    <center className="todo-container">
2
        <AppName/>
        <AddTODO/>
        <ToDoItems todoItems={todoItems}></ToDoItems>
    </center>
  );
}

export default App;
