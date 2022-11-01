import React from 'react';
import PropTypes from 'prop-types';
import { SectionWrapp } from '../Section/Section.styled';

export default function Section({ children, title }) {
  return (
    <SectionWrapp className="FeedbackBlock">
      <div className="title">
        <h2>{title}</h2>
      </div>
      {children}
    </SectionWrapp>
  );
}

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired,
  ]),
  title: PropTypes.string.isRequired,
};
