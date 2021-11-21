import React from "react";
import Item from "./Item";
import "./item.css";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "", items: [], counter: 0 };
  }

  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);
  handleRemove = this.handleRemove.bind(this);

  handleChange(e) {
    this.setState((state) => ({ ...state, input: e.target.value }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const input = this.state.input.trim();
    if (input) {
      this.setState((state) => ({
        ...state,
        input: "",
        items: [{ key: state.counter, title: state.input }, ...state.items],
        counter: state.counter + 1,
      }));
    }
  }

  handleRemove(index) {
    this.setState((state) => ({
      ...state,
      items: state.items.filter((el) => el.key !== index),
    }));
  }

  render() {
    return (
      <div className="toDoList">
        <form onSubmit={this.handleSubmit}>
          <div className="flex">
            <input
              className="input"
              placeholder="Add your text"
              onChange={this.handleChange}
              value={this.state.input}
            />
            <div className="counter">{this.state.items.length}</div>
          </div>
          <div>
            <button type="submit" className="submit">
              Submit
            </button>
          </div>
        </form>
        {this.state.items.map((item) => (
          <Item key={item.key} title={item.title} handleRemove={this.handleRemove} index={item.key} />
        ))}
      </div>
    );
  }
}

export default ToDoList;
