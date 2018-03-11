import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ className, ...props }) => (
  <button className={`Button ${className}`} {...props} />
);

Button.propTypes = {
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
