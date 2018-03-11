import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Wordsearch.css';
import Letter from './Letter';
import { create2dArray } from '../utils';

class Cursor {
  constructor(firstLetter, lastLetter) {
    this.firstLetter = firstLetter;
    this.adjRow = Math.min(Math.max(lastLetter[0] - firstLetter[0], -1), 1);
    this.adjCol = Math.min(Math.max(lastLetter[1] - firstLetter[1], -1), 1);
    this.forwards = this.adjRow >= 0 && this.adjCol >= 0;

    this.dir = '';
    if (this.adjRow < 0) {
      this.dir += 'N';
    } else if (this.adjRow > 0) {
      this.dir += 'S';
    }
    if (this.adjCol < 0) {
      this.dir += 'E';
    } else if (this.adjCol > 0) {
      this.dir += 'W';
    }
  }

  getPosition(index) {
    return {
      row: this.firstLetter[0] + (index * this.adjRow),
      col: this.firstLetter[1] + (index * this.adjCol),
    };
  }
}

function getLetterChildren(height, width, solution) {
  const children = create2dArray(height, width, '');
  solution.forEach((word, wordIndex) => {
    if (!word.found) return;
    const c = new Cursor(word.firstLetter, word.lastLetter);
    word.word.split('').forEach((letter, letterIndex) => {
      const p = c.getPosition(letterIndex);
      const key = `${wordIndex}-${letterIndex}`;
      children[p.row][p.col] = children[p.row][p.col] || [<span className="Letter-highlight" key={`${key}-1`} />];
      if (letterIndex < word.word.length - 1) {
        children[p.row][p.col].push(<span className={`Letter-highlight Letter-highlight--join${c.dir}`} key={`${key}-2`} />);
      }
    });
  });
  return children;
}

class Wordsearch extends PureComponent {
  static propTypes = {
    puzzle: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    solution: PropTypes.arrayOf(PropTypes.object),
    showSolution: PropTypes.bool,
  };

  static defaultProps = {
    solution: null,
    showSolution: false,
  };

  render() {
    const { puzzle, solution, showSolution } = this.props;
    const letterChildren = (solution && solution.length && showSolution)
      ? getLetterChildren(puzzle.length, puzzle[0].length, solution)
      : false;

    /* eslint-disable react/no-array-index-key */
    const grid = puzzle.map((row, rowIndex) => (
      <div className="Wordsearch-row" key={rowIndex}>
        {row.map((char, colIndex) => (
          <Letter key={`${rowIndex}-${colIndex}-${char}`}>
            {char}
            {letterChildren && letterChildren[rowIndex][colIndex]}
          </Letter>
        ))}
      </div>
    ));

    return (
      <div className="Wordsearch">
        {grid}
      </div>
    );
  }
}

export default Wordsearch;
