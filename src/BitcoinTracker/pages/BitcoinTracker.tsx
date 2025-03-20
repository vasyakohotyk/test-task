import React from 'react';
import WebSocketButton from '../components/WebSocketButton';
import TransactionList from '../components/TransactionList';
import { useWebSocket } from '../utils/useWebSocket';

const BitcoinTracker: React.FC = () => {
  const { isConnected, transactions, total, connectWebSocket, disconnectWebSocket, resetWebSocket } = useWebSocket();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
     
      color: '#333',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '12px',
        padding: '30px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '800px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
      }}>
        <h2 style={{
          fontSize: '2.2rem',
          fontWeight: '600',
          color: '#333',
          marginBottom: '20px',
        }}>
          Bitcoin Transaction Tracker
        </h2>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: '500',
          color: '#555',
          marginBottom: '20px',
        }}>
          Total: <span style={{ color: '#ff9800' }}>{total.toFixed(8)} BTC</span>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          marginBottom: '30px',
        }}>
          <WebSocketButton
            onClick={connectWebSocket}
            label="Start"
            disabled={isConnected}
            backgroundColor="#4caf50" // Green
            
          />
          <WebSocketButton
            onClick={disconnectWebSocket}
            label="Stop"
            disabled={!isConnected}
            backgroundColor="#f44336" // Red
            
          />
          <WebSocketButton
            onClick={() => {
             resetWebSocket();
            }}
            label="Reset"
            disabled={false}
            backgroundColor="#ff9500" // Gray
           
          />
        </div>

        {transactions.length > 0 && <TransactionList transactions={transactions} /> }
      </div>
    </div>
  );
};

export default BitcoinTracker;
