import React from 'react';
import PropTypes from 'prop-types';
import './WordsearchLetter.css';

const WordsearchLetter = ({ className, children }) => (
  <div className={`WordsearchLetter ${className}`}>
    {children}
  </div>
);

WordsearchLetter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

WordsearchLetter.defaultProps = {
  className: '',
};

export default WordsearchLetter;
