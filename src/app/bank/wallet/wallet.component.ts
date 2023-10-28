import {Component, Inject, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {TuiPushService} from "@taiga-ui/kit";
import {TuiAlertService} from "@taiga-ui/core";
import {switchMap, take} from "rxjs";
import {BankAccount} from "../bank-account";
import {BankService} from "../bank.service";

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent {

  @Input() bankAccount!: BankAccount;
  openWallet: boolean = false;
  openDialog: boolean = false;
  amount: number = 500;

  sendInvoice() {
    this.openDialog = false;
    this.bankService.increaseBalance({bankAccountId: this.bankAccount.id, amount: this.amount}).subscribe(
      invoice => {
      }, error => {
        console.log(error);
      }
    )
  }

  getSortedTransactions() {
    return this.bankAccount.transactions.sort((a, b) => {
      const dateA = new Date(a.dateTime);
      const dateB = new Date(b.dateTime);

      if (dateA > dateB) return -1;
      if (dateA < dateB) return 1;
      return 0;
    });
  }

  getFormattedDate(dateTime: string): string {
    const months = [
      'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    const date = new Date(dateTime);

    const day = date.getDate();
    const month = months[date.getMonth()];
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day} ${month} в ${hours}:${minutes}`;
  }


  constructor(@Inject(TuiPushService) protected readonly push: TuiPushService,
              @Inject(TuiAlertService) protected readonly alert: TuiAlertService,
              private bankService: BankService) {
  }
}
