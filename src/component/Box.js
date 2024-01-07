import React from "react";

const Box = (props) => {
  console.log("props", props);

  // props.result 값에 따라 className 결정
  let className = "box";
  if (props.result === "win") {
    className = "winner-box";
  } else if (props.result === "lose") {
    className = "loser-box";
  }

  return (
    <div className={className}>
      <h1>{props.title}</h1>
      <img
        className="item-img"
        src={props.item ? props.item.img : "/img/default.jpg"}
        alt="item"
      />
      <h2>{props.result}</h2>
    </div>
  );
};

export default Box;
