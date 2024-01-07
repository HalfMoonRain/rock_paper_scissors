import { useState } from "react";
import "./App.css";
import Box from "./component/Box";
// 1. 박스 2개(타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템이 선택된다.
// 5. 3, 4 결과에 따라서 결과를 따진다
// 6. 승패의 결과에 따라 태두리 색이 바뀐다.

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

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
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

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체의 키값만 뽑아서 Array로 만들어준다.
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result.user} />
        <Box title="Computer" item={computerSelect} result={result.computer} />
      </div>

      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
