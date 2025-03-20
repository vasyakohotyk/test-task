import React from 'react';
import { motion } from 'framer-motion';
import { Transaction } from '../utils/types';

const TransactionItem: React.FC<{ transaction: Transaction }> = ({ transaction }) => {
  return (
    <motion.div
      key={transaction.hash}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{
        padding: '15px',
        margin: '10px 0',
        borderRadius: '10px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e0e0e0',
        transition: 'transform 0.3s ease',
        wordWrap: 'break-word', // Для розриву довгих слів
        overflow: 'hidden', // Текст не виходить за межі
        maxWidth: '100%', // Не перевищує ширину батьківського елементу
        boxSizing: 'border-box', // Коректний розрахунок ширини та висоти
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1.00 }}
    >
      <div style={{ fontSize: '14px', color: '#555' }}>
        <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#f55547', marginBottom: '8px' }}>
          <strong>From:</strong> {transaction.from}
        </div>
        <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#29a31c', marginBottom: '8px' }}>
          <strong>To:</strong> {transaction.to}
        </div>
        <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#3a9cff' }}>
          <strong>Amount:</strong> {transaction.amount} BTC
        </div>
      </div>
    </motion.div>
  );
};

export default TransactionItem;
