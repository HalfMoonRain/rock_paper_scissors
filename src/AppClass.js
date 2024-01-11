import React, { Component } from "react";
import BoxClass from "./component/BoxClass";

const choice = {
  rock: {
    name: "Rock",
    img: "/img/rock.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "/img/scissors.jpg",
  },
  paper: {
    name: "Paper",
    img: "/img/paper.jpg",
  },
};

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: "",
      computerSelect: "",
      result: "",
    };
  }
  play = (userChoice) => {
    const userSelect = choice[userChoice];
    const computerChoice = this.randomChoice();
    const result = this.judgement(userSelect, computerChoice);

    this.setState({
      userSelect,
      computerSelect: computerChoice,
      result,
    });
    // this.setUserSelect({
    //   userselect: choice[userChoice],
    // });
    // this.computerChoice = this.randomChoice();
    // this.setComputerSelect({
    //   computerSelect: choice[this.computerChoice],
    // });
    // this.setResult({
    //   result: this.judgement(this.state.userSelect, this.state.computerSelect),
    // });
  };
  judgement = (user, computer) => {
    console.log(user, computer);

    //가위바위보 로직 구현
    // user == computer -> tie
    // user == rock, computer == scissors -> user win
    // ...
    // name을 가지고 비교를 해야함.
    if (user.name == computer.name) {
      return { user: "tie", computer: "tie" };
    } else if (user.name == "Rock")
      return computer.name == "Scissors"
        ? { user: "win", computer: "lose" }
        : { user: "lose", computer: "win" };
    else if (user.name == "Scissors")
      return computer.name == "Paper"
        ? { user: "win", computer: "lose" }
        : { user: "lose", computer: "win" };
    else if (user.name == "Paper")
      return computer.name == "Rock"
        ? { user: "win", computer: "lose" }
        : { user: "lose", computer: "win" };
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체의 키값만 뽑아서 Array로 만들어준다.
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  render() {
    return (
      <div>
        <div className="main">
          <BoxClass
            title="You"
            item={this.state.userSelect}
            result={this.state.result.user}
          />
          <BoxClass
            title="Computer"
            item={this.state.computerSelect}
            result={this.state.result.computer}
          />
        </div>

        <div className="main">
          <button onClick={() => this.play("scissors")}>가위</button>
          <button onClick={() => this.play("rock")}>바위</button>
          <button onClick={() => this.play("paper")}>보</button>
        </div>
      </div>
    );
  }
}

// import React, { Component } from "react";
// import BoxClass from "./component/BoxClass";

// export default class AppClass extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter2: 0,
//       num: 1,
//       value: 0,
//     };
//   }

//   increase = () => {
//     this.setState({
//       counter2: this.state.counter2 + 1,
//     });
//     console.log("counter2", this.counter2);
//     console.log(this.state.num);
//     console.log(this.state);
//   };

//   render() {
//     return (
//       <div>
//         <div>state:{this.state.counter2}</div>
//         <button onClick={this.increase}>클릭!</button>
//         <BoxClass num={this.state.counter2} />
//       </div>
//     );
//   }
// }
