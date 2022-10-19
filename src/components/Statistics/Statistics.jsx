import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import { Section } from 'components/Section/Section';

class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.func,
    positivePercentage: PropTypes.func,
  };

  render() {
    console.log(this.props.total);
    return (
      <Section title="Statistics">
        {this.props.total > 0 ? (
          <div className="Statistics">
            <p>Good: {this.props.good}</p>
            <p>Neutral: {this.props.neutral}</p>
            <p>Bad: {this.props.bad}</p>
            <p>
              Total:
              {this.props.total}
            </p>
            <p>Positive feedbacks: {this.props.positivePercentage}%</p>
          </div>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}

export default Statistics;
