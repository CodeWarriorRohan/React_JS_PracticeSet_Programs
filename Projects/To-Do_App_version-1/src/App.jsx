import AddTODO from "./TODO_components/AddTODO";
import AppName from "./TODO_components/AppName";
import ToDoItem1 from "./TODO_components/ToDoItem1";
import ToDoItem2 from "./TODO_components/ToDoItem2";
import "./App.css"
function App() {
  return (
    <center className="todo-container">

        <AppName/>
        <AddTODO/>
        <div className="items-container">
        <ToDoItem1/>
        <ToDoItem2/>
        </div>
  
    </center>
  );
}

export default App;
