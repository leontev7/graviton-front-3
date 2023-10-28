
export interface Transaction {
  id: number;
  payerId: number;
  recipientId: number;
  amount: number;
  status: number;
  type: number;
  message: string;
  dateTime: string;
}
