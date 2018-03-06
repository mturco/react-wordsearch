import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { className, onEnterPressed, ...otherProps } = this.props;
    return (
      <button className={`Button ${className}`} {...otherProps}/>
    );
  }
}

export default Button;
