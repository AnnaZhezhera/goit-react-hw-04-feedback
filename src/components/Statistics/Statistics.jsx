import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  render() {
    return (
      <div className="Statistics">
        <h3>Statistics</h3>
        <p>Good: {this.props.good}</p>
        <p>Neutral: {this.props.neutral}</p>
        <p>Bad: {this.props.bad}</p>
        <p>Total: {this.props.total}</p>
        <p>Positive feedbacks: {this.props.positivePercentage}%</p>
      </div>
    );
  }
}

export default Statistics;
