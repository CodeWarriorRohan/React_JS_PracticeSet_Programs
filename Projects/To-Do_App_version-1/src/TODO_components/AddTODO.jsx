function AddTODO() {
  return (
    <div class="container text-center">
        <div class="row todo-row">
          <div class="col-6">
            <input type="text" placeholder="Enter ToDo Here"/>
          </div>
          <div class="col-4">
            <input type="date"/>
          </div>
          <div class="col-2">
            <button type="bitton" class="btn btn-success todo-button">Add</button>
          </div>
        </div>
      </div>
  );
}

export default AddTODO;