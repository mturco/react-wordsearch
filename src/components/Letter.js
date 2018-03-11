import React from 'react';
import PropTypes from 'prop-types';
import './Letter.css';

const Letter = ({ className, children }) => (
  <div className={`Letter ${className}`}>
    {children}
  </div>
);

Letter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Letter.defaultProps = {
  className: '',
};

export default Letter;
