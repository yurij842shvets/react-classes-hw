import { Component } from "react";
export default class TaskList extends Component {
  static tasks = [
    { id: 1, text: "Task 1" },
    { id: 2, text: "Task 2" },
    { id: 3, text: "Task 3" },
    { id: 4, text: "Task 4" },
  ];
  handleAddTask = () => {
    const findInput = document.querySelector(".add-task");
    const text = findInput.value;
    if (!findInput) return;
    if (text === "") {
      alert("Field cannot be empty");
    }
    TaskList.tasks.push({
      id: TaskList.tasks.length + 1,
      text,
    });
    findInput.value = "";
    this.forceUpdate();
  };

  handleDeleteButton = (id) => {
    console.log("button");
    TaskList.tasks = TaskList.tasks.filter((task) => task.id !== id);
    this.forceUpdate();
  };
  render() {
    return (
      <section className="task-list">
        <h2 style={{ textAlign: "center" }}>Task List</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px",
            padding: "20px",
            backgroundColor: "lightgrey",
            borderRadius: "30px",
            border: "1px solid #000",
            gap: "10px",
            marginLeft: "55px",
          }}
        >
          <input className="add-task" type="text" />
          <button onClick={this.handleAddTask}>Add Task</button>
        </div>
        <ul>
          {TaskList.tasks.map((task) => (
            <li
              key={task.id}
              style={{
                listStyle: "none",
                backgroundColor: "lightgray",
                margin: "5px",
                padding: "10px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                borderRadius: "30px",
                border: "1px solid rgba(117, 117, 117, 0.56)"
                
              }}
            >
              <span>{task.text}</span>
              <button onClick={() => this.handleDeleteButton(task.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
