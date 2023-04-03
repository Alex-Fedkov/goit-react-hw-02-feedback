import { StatsList, Label } from "./styles.jsx";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <StatsList>Good: <Label>{good}</Label></StatsList>
      <StatsList>Neutral: <Label>{neutral}</Label></StatsList>
      <StatsList>Bad: <Label>{bad}</Label></StatsList>
      <StatsList>Total: <Label>{total}</Label></StatsList>
      <StatsList>Positive Percentage: <Label>{positivePercentage}</Label></StatsList>
    </div>
  );
};

export default Statistics;
