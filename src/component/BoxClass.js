import React, { Component } from "react";

export default class BoxClass extends Component {
  constructor(props) {
    super(props);
    console.log("boxprops", props);
    this.className = "box";
    if (props.result === "win") {
      this.className = "winner-box";
    } else if (props.result === "lose") {
      this.className = "loser-box";
    }
  }

  render() {
    return (
      <div className={this.className}>
        <h1>{this.props.title}</h1>
        <img
          className="item-img"
          src={this.props.item ? this.props.item.img : "/img/default.jpg"}
          alt="item"
        />
        <h2>{this.props.result}</h2>
      </div>
    );
  }
}
