import { Button } from "./style.jsx"

const FeedbackOptions = ({options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (<Button key={option} value={option} onClick={onLeaveFeedback}>{option}</Button>);
      })}
    </div>
  );
};

export default FeedbackOptions;