import { Component } from "react";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";
import { Container } from "./style.jsx";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
    const { good, neutral, bad} = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.floor(this.state.good * 100 / total);
  }

  onLeaveFeedback = event => {
    const {value} = event.target;
    this.setState(prevState => ({ [value]: prevState[value] + 1 }));
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return(
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title="Statistic">
        {total >= 1 ? (<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />) : <Notification message="There is no feedback"></Notification>}
        </Section>
      </Container>
    );
  }
};

export default App;
