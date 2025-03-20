// src/components/TransactionList.tsx
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import TransactionItem from './TransactionItem';
import { Transaction } from '../utils/types';

const TransactionList: React.FC<{ transactions: Transaction[] }> = ({ transactions }) => {
  return (
    <div
      style={{
        overflowY: 'auto',
        maxHeight: '280px',
        border: '1px solid #ccc 0.7',
        
        padding: '10px',
        borderRadius: '5px',
      }}
    >
      <AnimatePresence>
        {transactions.map((tx) => (
          <TransactionItem key={tx.hash} transaction={tx} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TransactionList;
export {}