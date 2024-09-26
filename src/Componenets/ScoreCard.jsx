import React from "react";

const ScoreCard = ({ score, resetGame }) => {
  const remark = () => {
    if (score > 10) {
      return "You have a solid luck Bro! should try in Dream11";
    } else if (score < 10 && score > 5) {
      return "Chalo theek thakk hi lg hai, sattaa try kia jaa sakta";
    } else {
      return "Jab naseeb hi ho gandu to kya krega pandu";
    }
  };

  return (
    <div className="scorecard">
      <h1 className="scorecard-title">Game Over</h1>
      <p className="final-score">Your Final Score: {score}</p>
      <h2 className="score-remark">{remark()}</h2>
      <button className="play-again-button" onClick={resetGame}>
        Play Again
      </button>
    </div>
  );
};

export default ScoreCard;
