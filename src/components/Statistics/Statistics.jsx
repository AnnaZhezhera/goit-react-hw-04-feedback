import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import Section from 'components/Section/Section';

export default function Statistics({
  total,
  good,
  neutral,
  bad,
  positivePercentage,
}) {
  return (
    <Section title="Statistics">
      {total > 0 ? (
        <div className="Statistics">
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedbacks: {positivePercentage}%</p>
        </div>
      ) : (
        <Notification message="there is no feedback" />
      )}
    </Section>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
