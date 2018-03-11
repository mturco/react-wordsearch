import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './WordList.css';
import Word from './Word';
import TextInput from './forms/TextInput';

class WordList extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    words: PropTypes.arrayOf(PropTypes.string),
    emptyMessage: PropTypes.string,
    editable: PropTypes.bool,
    onWordAdded: PropTypes.func,
    onWordRemoved: PropTypes.func,
  };

  static defaultProps = {
    title: '',
    words: [],
    emptyMessage: '',
    editable: false,
    onWordAdded: () => {},
    onWordRemoved: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      newWord: '',
    };
  }

  handleNewWordChange = (e) => {
    this.setState({ newWord: e.target.value });
  };

  handleSubmit = () => {
    this.props.onWordAdded(this.state.newWord);
    this.setState({ newWord: '' });
  };

  render() {
    const words = this.props.words.map(w => (
      <Word
        word={w}
        controls={this.props.editable}
        onRemove={() => this.props.onWordRemoved(w)}
        key={w}
      />
    ));
    return (
      <div className="WordList">
        {this.props.title &&
          <div className="WordList-heading">{this.props.title}</div>
        }
        {this.props.emptyMessage && this.props.words.length === 0 &&
          <div className="WordList-emptyMessage">{this.props.emptyMessage}</div>
        }
        <ul className="WordList-list">
          {words}
        </ul>
        {this.props.editable &&
          <TextInput
            value={this.state.newWord}
            placeholder="Add word"
            className="WordList-addWord"
            onChange={this.handleNewWordChange}
            onEnterPressed={this.handleSubmit}
          />
        }
      </div>
    );
  }
}

export default WordList;
