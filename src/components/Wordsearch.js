import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Wordsearch.css';
import WordsearchLetter from './WordsearchLetter';
import { create2dArray } from '../utils';

function getLetterClasses(solution) {
  const classes = create2dArray(solution.length, solution[0].length, '');
  for (let y = 0; y < solution.length; y++) {
    for (let x = 0; x < solution[y].length; x++) {
      if (solution[y][x].trim() !== '') {

        classes[y][x] = 'WordsearchLetter--highlighted';

        // check south
        if (y + 1 < solution.length && solution[y+1][x].trim() !== '') {
          classes[y][x] += ' WordsearchLetter--joinS';
        }
        // check southeast
        if (y + 1 < solution.length && x - 1 >= 0 && solution[y+1][x-1].trim() !== '') {
          classes[y][x] += ' WordsearchLetter--joinSE';
        }
        // check southwest
        if (y + 1 < solution.length && x + 1 < solution[y].length && solution[y+1][x+1].trim() !== '') {
          classes[y][x] += ' WordsearchLetter--joinSW';
        }
        // check west
        if (x + 1 < solution[y].length && solution[y][x+1].trim() !== '') {
          classes[y][x] += ' WordsearchLetter--joinW';
        }
      }
    }
  }
  return classes;
}

class Wordsearch extends Component {
  static propTypes = {
    puzzle: PropTypes.array.isRequired,
    solution: PropTypes.array,
    showSolution: PropTypes.bool,
  };

  static defaultProps = {
    showSolution: false,
  };

  render() {
    const { puzzle, solution, showSolution } = this.props;
    const classes = (solution && solution.length && showSolution)
      ? getLetterClasses(solution)
      : create2dArray(puzzle.length, puzzle[0].length, '');
    const grid = puzzle.map((row, rowIndex) =>
      <div className="Wordsearch-row" key={rowIndex}>
        {row.map((char, colIndex) =>
          <WordsearchLetter key={`${rowIndex}-${colIndex}-${char}`} className={classes[rowIndex][colIndex]}>
            {char}
          </WordsearchLetter>
        )}
      </div>
    );

    return (
      <div className="Wordsearch">
        {grid}
      </div>
    );
  }
}

export default Wordsearch;
