import {Transaction} from "./transaction";
import {Invoice} from "./invoice";

export interface BankAccount {
  id: number;
  balance: number;
  transactions: Transaction[];
  invoices: Invoice[];
}
