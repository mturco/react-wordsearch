import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Word.css';

class Word extends Component {
  static propTypes = {
    word: PropTypes.string.isRequired,
    controls: PropTypes.bool,
    onRemove: PropTypes.func,
  };

  static defaultProps = {
    controls: false,
    onRemove: () => {},
  };

  render() {
    return (
      <li className="Word">
        <span className="Word-label">{this.props.word}</span>
        {this.props.controls &&
          <button className="Word-removeBtn" onClick={this.props.onRemove}></button>
        }
      </li>
    );
  }
}

export default Word;
