import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css'

type SquareType = string | null;

interface IProps{
    value: SquareType
    onClick: () => void;
}

interface IBoardProps{

}

interface IBoardStates{
    squares: SquareType[],
    xIsNext: boolean,
}

function Square(props: IProps) {
        return (
          <button
            className="square"
            onClick={props.onClick}
          >
            {props.value}
          </button>
        );
    }
    
class Board extends React.Component<IBoardProps, IBoardStates> {
    constructor(props: IBoardProps){
        super(props);
        this.state = {
            squares: Array<SquareType>(9).fill(null),
            xIsNext: true
        };
    }

    handleClick(i: number) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        if (calculateWinner(squares) || squares[i]){
            return;
        }
        this.setState(
            {
                squares: squares,
                xIsNext: !this.state.xIsNext,
            }
        );
    }

    renderSquare(i: number) {
        return (
            <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>
        );
    }
    
    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner; 
        } else {
            status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
    
class Game extends React.Component {
    render() {
        return (
          <div className="game">
            <div className="game-board">
              <Board />
            </div>
            <div className="game-info">
              <div>{/* status */}</div>
              <ol>{/* TODO */}</ol>
            </div>
          </div>
        );
      }
    }
    
    // ========================================
    
    ReactDOM.render(
      <Game />,
      document.getElementById('root')
    );

function calculateWinner(squares: SquareType[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}