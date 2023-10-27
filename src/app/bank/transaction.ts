
export interface Transaction {
  id: number;
  payerId: number;
  recipientId: number;
  amount: number;
  status: number;
  message: string;
  dateTime: string;
}
