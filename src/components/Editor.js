import React, { Component } from 'react';
import './Editor.css';
import wordsearch from 'wordsearch';
import Wordsearch from './Wordsearch';
import WordList from './WordList';
import Button from './forms/Button';

function createEmptyPuzzle(width, height) {
  return Array(height).fill(Array(width).fill('•'));
}

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      excludedWords: [],
      width: 20,
      height: 20,
      showSolution: false,
    };
    this.state.puzzle = createEmptyPuzzle(this.state.width, this.state.height);
  }

  render() {
    const { words, puzzle, solution, showSolution } = this.state;

    return (
      <div className="Editor">
        <Wordsearch puzzle={puzzle} solution={solution} showSolution={showSolution}/>
        <div className="Editor-panel">
          <WordList words={this.state.words}
            onWordAdded={this.handleWordAdded}
            onWordRemoved={this.handleWordRemoved}
            editable/>
          <Button onClick={this.toggleSolution}>{showSolution ? 'Hide' : 'Show'} solution</Button>
        </div>
      </div>
    );
  }

  handleWordAdded = (word) => {
    const words = this.state.words.slice();
    if (word.trim().length > 1 && words.indexOf(word) === -1) {
      words.push(word.toLowerCase().replace(/\s/g, ''));
      this.setState({ words }, this.updatePuzzle);
    }
  };

  handleWordRemoved = (word) => {
    const words = this.state.words.slice();
    if (words.indexOf(word) !== -1) {
      words.splice(words.indexOf(word), 1);
      this.setState({ words }, this.updatePuzzle);
    }
  };

  toggleSolution = () => {
    this.setState({ showSolution: !this.state.showSolution });
  };

  updatePuzzle() {
    const { words, width, height } = this.state;
    if (words.length) {
      const ws = wordsearch(words, width, height, { backwards: 0.25 });
      this.setState({
        puzzle: ws.grid,
        solution: ws.solved,
        excludedWords: [],
      });
    } else {
      this.setState({
        puzzle: createEmptyPuzzle(width, height),
        excludedWords: [],
      });
    }
  }
}

export default Editor;
