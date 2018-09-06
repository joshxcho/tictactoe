import React from 'react';
import Square from './Square.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares });
  }

  renderSquare(i) {
    const { squares } = this.state;
    return <Square value={squares[i]} onClick={() => this.handleClick(i)} />;
  }

  render() {
    return (
      <div className="motherBoard">
        <div className="firstRow">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="secondRow">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="thirdRow">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;