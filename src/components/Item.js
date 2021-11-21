import React from "react";
import "./item.css"

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stroke: false };
  }

  handleClick = this.handleClick.bind(this);
  toggleRemove = this.toggleRemove.bind(this);

  handleClick() {
    this.setState((state) => (state.stroke ? { stroke: false } : { stroke: true }));
  }

  toggleRemove() {
    return this.props.handleRemove(this.props.index);
  }

  render() {
    return (
      <div className="line" onClick={this.handleClick} style={this.state.stroke ? { textDecoration: "line-through" } : {}}>
        {this.setState.stroke}
        {this.props.title}
        {!this.state.stroke ? this.state.stroke : <button className="remove" onClick={this.toggleRemove}>Remove</button>}
      </div>
    );
  }
}

export default Item;
