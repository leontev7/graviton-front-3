import {BankAccount} from "../bank/bank-account";
import {User} from "../users/user";
import {Course} from "../courses/course";


export interface Student extends User {
  points: number;
  grade: number;
  level: string;
  bankAccount: BankAccount;
  courses: Course[];
  referralStudents: User[];
}
