import React, { useState } from 'react';

function EightBall({ answers }) {
  const [currentMsg, setCurrentMsg] = useState('Think of a Question');
  const [currentColor, setCurrentColor] = useState('black');

  const handleClick = () => {
    const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
    setCurrentMsg(randomAnswer.msg);
    setCurrentColor(randomAnswer.color);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: currentColor,
        color: 'white',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer'
      }}
    >
      {currentMsg}
    </div>
  );
}

export default EightBall;
