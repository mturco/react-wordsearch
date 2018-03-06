import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';

class TextInput extends Component {
  static propTypes = {
    onEnterPressed: PropTypes.func,
    className: PropTypes.string,
  };

  static defaultProps = {
    onEnterPressed: () => {},
    className: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    const { className, onEnterPressed, ...otherProps } = this.props;
    return (
      <input type="text" className={`TextInput ${className}`}
        value={this.state.value}
        onKeyDown={this.handleKeyDown}
        onChange={this.handleChange}
        {...otherProps}/>
    );
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleKeyDown = (e) => {
    if (e.which === 13) {
      this.props.onEnterPressed(e);
    }
  };
}

export default TextInput;
