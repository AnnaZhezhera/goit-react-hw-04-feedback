import React, { Component } from 'react';
import { AppWrapp } from './App.styled';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Statistics/FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = name => {
    console.log(name);
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeeds = this.countTotalFeedback();
    if (totalFeeds !== 0) {
      return ((this.state.good / totalFeeds) * 100).toFixed(1);
    }
    return 0;
  };

  render() {
    return (
      <AppWrapp>
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </AppWrapp>
    );
  }
}
