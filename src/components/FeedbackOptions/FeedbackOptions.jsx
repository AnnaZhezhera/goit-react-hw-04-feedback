import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ButonsWrapp,
  ButtonForFeedback,
} from '../Statistics/FeedbackWidget.styled';
import { Section } from 'components/Section/Section';

class FeedbackOptions extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <ButonsWrapp className="feedbackButtons">
          {this.props.options.map(key => (
            <ButtonForFeedback
              type="button"
              className={key}
              onClick={this.props.onLeaveFeedback.bind(null, key)}
            >
              {key}
            </ButtonForFeedback>
          ))}
        </ButonsWrapp>
      </Section>
    );
  }
}

export default FeedbackOptions;
