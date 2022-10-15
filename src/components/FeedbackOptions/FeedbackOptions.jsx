import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonForFeedback } from '../Statistics/FeedbackWidget.styled';

class FeedbackOptions extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  countTotalFeedback = () => {
    // return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    // const totalFeeds = this.countTotalFeedback();
    // if (totalFeeds !== 0) {
    //   return ((this.state.good / totalFeeds) * 100).toFixed(1);
    // }
    // return 0;
  };

  render() {
    return (
      <div className="FeedbackBlock">
        <h3>Please leave feedback</h3>
        <ButtonForFeedback
          type="button"
          className="good"
          onClick={this.props.onLeaveFeedback.bind(null, 'good')}
        >
          Good
        </ButtonForFeedback>
        <ButtonForFeedback
          type="button"
          className="neutral"
          onClick={this.props.onLeaveFeedback.bind(null, 'neutral')}
        >
          Neutral
        </ButtonForFeedback>
        <ButtonForFeedback
          type="button"
          className="bad"
          onClick={this.props.onLeaveFeedback.bind(null, 'bad')}
        >
          Bad
        </ButtonForFeedback>
      </div>
    );
  }
}

export default FeedbackOptions;
