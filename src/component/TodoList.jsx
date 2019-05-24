import React, { Component } from "react";
import Task from "./Task";


class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      value: "",
      done: false,
      todo: false
    };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleClick = e => {
    let task = {
      id: this.state.tasks.length,
      content: this.state.value,
      isDone: false,
      isEdit: false
    };

    this.setState((state, props) => ({
      tasks: [...state.tasks, task]
    }));
  };

  /* Done Task */
  handleDone = itemE => {
    let tasks = this.state.tasks.map(item => {
      item.id === itemE.id && (item.isDone = !itemE.isDone);
      return item;
    });
    this.setState({ tasks });
  };

  /* Remove Task */
  handleRemove = itemE => {
    let tasks = this.state.tasks.filter(item => {
      return item.id !== itemE.id;
    });
    this.setState({ tasks });
  };

  /*Function EDit content */
  handleClickEdit = itemE => {
    let tasks = this.state.tasks.map(item => {
      item.id === itemE.id && (item.isEdit = !itemE.isEdit);
      return item;
    });
    this.setState({ tasks });
  };

  /* Function Change content task*/
  handleChangeContent = (e, itemE) => {
    let tasks = this.state.tasks.map(item => {
      item.id === itemE.id && (item.content = e.target.value);
      return item;
    });

    this.setState({ tasks });
  };

  /* Show Just Task Done */
  handleClickDone = () => {
    this.setState({ done: true, todo: false });
  };
  /* Show Just Task */
  handleClickTodo = () => {
    this.setState({ done: false, todo: true });
  };
  /* Show All */
  handleClickAll = () => {
    this.setState({ done: false, todo: false });
  };

  render() {
    return (
      <section className="todoList rounded mt-5 p-2">
        <div className="data mb-4">
          <h2 className="mb-3">Ajouter une tâche :</h2>
          <div className="mb-3">
            <input
              className=" w-50 mr-3"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button className="btn btn-primary" onClick={this.handleClick}>
              Ajouter
            </button>
          </div>
          <button
            id="todo"
            className="btn btn-info mr-3"
            onClick={this.handleClickTodo}
          >
            ToDo
          </button>
          <button
            id="Done"
            className="btn btn-info mr-3"
            onClick={this.handleClickDone}
          >
            Done
          </button>
          <button
            id="all"
            className="btn btn-secondary mr-3"
            onClick={this.handleClickAll}
          >
            All
          </button>
        </div>
        <hr />
        <div className="todo mt-4">
          <ul className="list-group">
            {this.state.tasks.map(item => (
              <li
                key={item.id}
                className={`list-group-item ${item.isDone &&
                  "bg-success text-white"} ${this.state.done &&
                  (item.isDone ? "d-inline" : "d-none")} ${this.state.todo &&
                  (item.isDone ? "d-none" : "d-inline")}`}
              >
                <Task
                  task={item}
                  content={item.content}
                  changeContent={this.handleChangeContent}
                  clickEDit={this.handleClickEdit}
                  removeTask={this.handleRemove}
                  doneTask={this.handleDone}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}
export default TodoList;
