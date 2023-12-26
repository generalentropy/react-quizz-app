import RestartButton from "./RestartButton";

function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const percentage = (points / maxPoints) * 100;

  let emoji;

  if (percentage === 100) emoji = "🏅";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "👍";
  if (percentage >= 10 && percentage < 50) emoji = "😒";
  if (percentage >= 0 && percentage < 10) emoji = "💩";
  if (percentage === 0) emoji = "🙈";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPoints} ({Math.ceil(percentage)}%)
      </p>

      <p className="highscore"> {highscore} points</p>
      <RestartButton dispatch={dispatch} />
    </>
  );
}

export default FinishScreen;
