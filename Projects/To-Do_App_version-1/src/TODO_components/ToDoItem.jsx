function ToDoItem({ todoName, todoDate }){
    return (
      <div class="container">
        <div class="row todo-row">
          <div class="col-6">{todoName}</div>
          <div class="col-4">{todoDate}</div>
          <div class="col-2">
            <button type="bitton" class="btn btn-danger todo-button">Delete</button>
          </div>
        </div>
      </div>
    );
}

export default ToDoItem;