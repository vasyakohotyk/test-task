import React, { useState } from 'react';
import { WebSocketButtonProps } from '../utils/types';

const WebSocketButton: React.FC<WebSocketButtonProps> = ({ onClick, label, disabled, backgroundColor }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <button
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{
        padding: '10px 15px',
        background: backgroundColor,
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        transform: isPressed ? 'scale(0.95)' : 'scale(1)', // зменшуємо кнопку при натисканні
        transition: 'transform 0.2s ease', // плавний ефект зменшення
      }}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default WebSocketButton;
