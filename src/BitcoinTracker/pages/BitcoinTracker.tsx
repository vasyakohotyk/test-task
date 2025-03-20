import React, { useState } from 'react';
import WebSocketButton from '../components/WebSocketButton';
import TransactionList from '../components/TransactionList';
import { useWebSocket } from '../hooks/useWebSocket';
import Loader from '../components/Loader';

const BitcoinTracker: React.FC = () => {
  const { isConnected, transactions, total, connectWebSocket, disconnectWebSocket, resetWebSocket } = useWebSocket();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleStartClick = () => {
    setIsLoading(true);
    connectWebSocket();
  };

  const handleTransactionUpdate = () => {
    if (transactions.length > 0) {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    handleTransactionUpdate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '30px 40px',
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
            onClick={handleStartClick}
            label="Start"
            disabled={isConnected}
            backgroundColor="#4caf50"
          />
          <WebSocketButton
            onClick={disconnectWebSocket}
            label="Stop"
            disabled={!isConnected}
            backgroundColor="#f44336"
          />
          <WebSocketButton
            onClick={() => resetWebSocket()}
            label="Reset"
            disabled={false}
            backgroundColor="#ff9500"
          />
        </div>

        {isLoading && (
          <div style={{ fontSize: '1.5rem', color: '#555', marginBottom: '20px' }}>
            <Loader/>
          </div>
        )}

        {transactions.length > 0 && <TransactionList transactions={transactions} />}
      </div>
    </div>
  );
};

export default BitcoinTracker;
