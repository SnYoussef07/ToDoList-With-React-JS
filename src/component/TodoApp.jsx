import React, { Component } from "react";
//import Task from "./Task";

class TodoApp extends Component {
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
      <div className="container rounded pt-5 mt-3">
        <section className="bg-primary rounded p-4">
          <h1 className="text-light">TodoList</h1>
        </section>

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
            <ul className="list-group" />
          </div>
        </section>
      </div>
    );
  }
}
export default TodoApp;
