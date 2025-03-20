
import { useState, useRef } from 'react';
import { Transaction } from '../utils/types';
export const useWebSocket = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [total, setTotal] = useState(0);
  const ws = useRef<WebSocket | null>(null);

  const connectWebSocket = () => {
    if (isConnected) return;
    ws.current = new WebSocket('wss://ws.blockchain.info/inv');

    ws.current.onopen = () => {
      ws.current?.send(JSON.stringify({ op: 'unconfirmed_sub' }));
      setIsConnected(true);
    };

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.op === 'utx') {
        const inputs = data.x.inputs;
        const outputs = data.x.out;

        if (outputs.length > 0) {
          const from = inputs[0]?.prev_out?.addr || 'Unknown';
          const to = outputs[0]?.addr || 'Unknown';
          const amount = outputs[0]?.value / 100000000;
          const newTx = { hash: data.x.hash, from, to, amount };

          setTransactions((prev) => [newTx, ...prev]);
          setTotal((prev) => prev + amount);
        }
      }
    };

    ws.current.onclose = () => {
      setIsConnected(false);
    };
  };

  const disconnectWebSocket = () => {
    if (!isConnected || !ws.current) return;
    ws.current.send(JSON.stringify({ op: 'unconfirmed_unsub' }));
    ws.current.close();
    ws.current = null;
    setIsConnected(false);
  };

  const resetWebSocket = () => {
    setTransactions([]);
    setTotal(0);
  };

  return { isConnected, transactions, total, connectWebSocket, disconnectWebSocket, resetWebSocket };
};
