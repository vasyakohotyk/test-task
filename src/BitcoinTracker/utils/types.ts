export interface Transaction {
    hash: string;
    from: string;
    to: string;
    amount: number;
  }

export interface WebSocketButtonProps {
    onClick: () => void;
    label: string;
    disabled: boolean;
    backgroundColor: string;
  }

export {}