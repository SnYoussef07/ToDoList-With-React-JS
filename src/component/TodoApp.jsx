import React, { Component } from "react";
import TodoList from "./TodoList";

class TodoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container rounded pt-5 mt-3">
        <section className="bg-primary rounded p-4">
          <h1 className="text-light">TodoList</h1>
        </section>
        <TodoList />
      </div>
    );
  }
}
export default TodoApp;
