import React from 'react';

function LetterButton({ symbol, inputValue, handleInput }) {
  return (
    <button onClick={() => handleInput(symbol)} type="button" className="btn btn-light">{symbol}</button>
  );
}

export default LetterButton;