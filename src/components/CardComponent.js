import React from 'react';

const Card = ({flipped, resolved, enableGame, cardsFlipped, xlocation, uniquekey, symbol, handleClick}) =>
    <li className={`${flipped ? 'flipped' : ' '}  ${resolved ? 'resolved': ' '}`}
        onClick={
          () => {
            if (enableGame && !flipped && cardsFlipped < 2) {
              handleClick({flipped, resolved, enableGame, cardsFlipped, xlocation, uniquekey, symbol})
            }
          }
        }
        xlocation={xlocation}
        ylocation={ylocation}
        uniquekey={uniquekey}>
      <i className={`fas ${symbol}`}></i>
    </li>

export default Card;
