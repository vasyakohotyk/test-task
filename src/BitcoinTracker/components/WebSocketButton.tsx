
import React from 'react';
import { WebSocketButtonProps } from '../utils/types';

const WebSocketButton: React.FC<WebSocketButtonProps> = ({ onClick, label, disabled, backgroundColor }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 15px',
        background: backgroundColor,
        color: 'white',
        border: 'none',
        borderRadius: '5px',
      }}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default WebSocketButton;

export {}
