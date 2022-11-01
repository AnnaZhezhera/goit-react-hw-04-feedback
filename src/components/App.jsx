import React, { useState } from 'react';
import { AppWrapp } from './App.styled';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = key => {
    console.log('key', key);
    if (key === 'good') setGood(good + 1);
    if (key === 'neutral') setNeutral(neutral + 1);
    if (key === 'bad') setBad(bad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeeds = countTotalFeedback();
    if (totalFeeds !== 0) {
      return ((good / totalFeeds) * 100).toFixed(1);
    }
    return 0;
  };

  return (
    <AppWrapp>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={key => onLeaveFeedback(key)}
      />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </AppWrapp>
  );
}
