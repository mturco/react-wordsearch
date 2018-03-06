import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WordsearchLetter.css';

class WordsearchLetter extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    return (
      <div className={`WordsearchLetter ${this.props.className}`}>
        {this.props.children}
      </div>
    );
  }
}

export default WordsearchLetter;
