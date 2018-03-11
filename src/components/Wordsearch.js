import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Wordsearch.css';
import WordsearchLetter from './WordsearchLetter';
import { create2dArray } from '../utils';

function getLetterClasses(solution) {
  return create2dArray(solution.length, solution[0].length, '')
    .map((row, y) => row.map((col, x) => {
      let className = '';
      if (solution[y][x].trim() !== '') {
        className = 'WordsearchLetter--highlighted';

        // check south
        if (y + 1 < solution.length && solution[y + 1][x].trim() !== '') {
          className += ' WordsearchLetter--joinS';
        }
        // check southeast
        if (y + 1 < solution.length && x - 1 >= 0 && solution[y + 1][x - 1].trim() !== '') {
          className += ' WordsearchLetter--joinSE';
        }
        // check southwest
        if (y + 1 < solution.length && x + 1 < row.length && solution[y + 1][x + 1].trim() !== '') {
          className += ' WordsearchLetter--joinSW';
        }
        // check west
        if (x + 1 < row.length && solution[y][x + 1].trim() !== '') {
          className += ' WordsearchLetter--joinW';
        }
      }
      return className;
    }));
}

class Wordsearch extends PureComponent {
  static propTypes = {
    puzzle: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    solution: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
    showSolution: PropTypes.bool,
  };

  static defaultProps = {
    solution: null,
    showSolution: false,
  };

  render() {
    const { puzzle, solution, showSolution } = this.props;
    const classes = (solution && solution.length && showSolution)
      ? getLetterClasses(solution)
      : create2dArray(puzzle.length, puzzle[0].length, '');

    /* eslint-disable react/no-array-index-key */
    const grid = puzzle.map((row, rowIndex) => (
      <div className="Wordsearch-row" key={rowIndex}>
        {row.map((char, colIndex) => (
          <WordsearchLetter key={`${rowIndex}-${colIndex}-${char}`} className={classes[rowIndex][colIndex]}>
            {char}
          </WordsearchLetter>
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
