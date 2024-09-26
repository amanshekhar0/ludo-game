import React, { useState } from "react"
import one from "../assets/one.png"
import two from "../assets/two.png"
import three from "../assets/three.png";
import four from "../assets/four.png";
import five from "../assets/five.png";
import six from "../assets/six.png";
import ScoreCard from "./ScoreCard";

const GamePlay = () => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const imgArr = [one, two, three, four, five, six];

  const [num, setNum] = useState(0);
  const [currentImg, setCurrentImg] = useState(one);
  const [score, setScore] = useState(0);
  const [turnsLeft, setTurnsLeft] = useState(5);
  const [instructionText, setInstructionText] = useState("Select a number");
  const [gameOver, setGameOver] = useState(false);
  const [showRules, setShowRules] = useState(false);

  const roll = () => {
    if (turnsLeft > 0) {
      const randomIndex = Math.floor(Math.random() * 6)
      const rolledNumber = randomIndex + 1
      setCurrentImg(imgArr[randomIndex])

      if (rolledNumber === num) {
        setScore(score + 5);
      } else if (
        (rolledNumber % 2 === 0 && num % 2 === 0) ||
        (rolledNumber % 2 !== 0 && num % 2 !== 0)
      ) {
        setScore(score + 2);
      } else {
        setScore(score - num);
      }

      setTurnsLeft(turnsLeft - 1);

      if (turnsLeft === 1) {
        setGameOver(true); 
      }

      setInstructionText("Select a number");
    }
  };

  const handleNumberSelection = (value) => {
    setNum(value);
    setInstructionText("Now roll the die");
  };

  const resetGame = () => {
    setScore(0);
    setTurnsLeft(5);
    setGameOver(false);
    setInstructionText("Select a number");
  };

  const toggleRules = () => {
    setShowRules(!showRules);
  };

  return (
    <div className="page-two">
      {gameOver ? (
        <ScoreCard score={score} resetGame={resetGame} />
      ) : (
        <>
          <div className="navbar2">
            <div className="part1">
              <div className="nav-score">
                <h1 className="zero">{score}</h1>
                <p className="total-score">Total score</p>
                <p>Turns left: {turnsLeft}</p>
              </div>
            </div>

            <div className="part2">
              <div className="one-six">
                {arrNumber.map((value, i) => (
                  <div
                    className="Box"
                    key={i}
                    onClick={() => handleNumberSelection(value)}
                  >
                    {value}
                  </div>
                ))}
              </div>
              <p className="select-number">{instructionText}</p>
            </div>
          </div>

          <div className="center">
            <div className="reset-score" onClick={resetGame}>
              Reset Score
            </div>
            <div className="show-rules" onClick={toggleRules}>
              {showRules ? "Hide Rules" : "Show Rules"}
            </div>

            {showRules && (
              <div className="rule-section">
                <h2>Game Rules:</h2>
                <ul>
                  <li>Select a number from 1 to 6.</li>
                  <li>Click the dice to roll it.</li>
                  <li>
                    If the rolled number matches your selection, you earn 5 points.
                  </li>
                  <li>
                    If both the rolled number and your selected number are odd or
                    even, you earn 2 points.
                  </li>
                  <li>
                    If neither condition is met, the selected number is subtracted
                    from your score.
                  </li>
                  <li>You have 5 turns to score as high as possible.</li>
                </ul>
              </div>
            )}

            <div className="die-images">
              <img src={currentImg} alt="Dice" onClick={roll} />
              <p className="roll-die">Click on the image to roll the die</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GamePlay;
