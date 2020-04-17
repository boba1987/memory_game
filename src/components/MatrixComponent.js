import React from 'react';
import Card from './CardComponent';

const Matrix = ({board, cardsFlipped, handleClick, enableGame}) => {
  return (
    <div>
      {board.map((row, rowIndex) => {
        return (
          <ul className="gridList" key={rowIndex}>
            {
              row.map((item, colIndex)=> {
                return (
                  <Card
                    cardsFlipped={cardsFlipped}
                    enableGame={enableGame}
                    symbol={item.symbol}
                    flipped={item.flipped}
                    handleClick={handleClick}
                    uniquekey={item.key}
                    key={item.key}
                    xlocation={colIndex}
                    ylocation={rowIndex}
                    resolved={item.resolved}
                  />
                )
              })
            }
          </ul>
        )
      })}
    </div>
  )
};

export default Matrix;
