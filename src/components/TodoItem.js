import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    // if (this.props.todo.completed) {
    //   return {
    //     textDecoration: "line-through",
    //   };
    // } else {
    //   return {
    //     textDecoration: "none",
    //   };
    // }

    return {
      borderRadius: "25px",
      background: "linear-gradient(145deg, #cacaca, #f0f0f0)",
      boxShadow: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
      // background: "#f4f4f4",
      padding: "10px",
      margin: "10px",
      // borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    return (
      // <div style={{ backgroundColor: '#f4f4f4' }}>
      // <div style={itemStyle}>
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" /> {this.props.todo.title}
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

// const itemStyle = {
//   backgroundColor: "#f4f4f4",
// };

export default TodoItem;
