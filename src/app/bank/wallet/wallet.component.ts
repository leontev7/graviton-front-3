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

  constructor(@Inject(TuiPushService) protected readonly push: TuiPushService,
              @Inject(TuiAlertService) protected readonly alert: TuiAlertService,
              private bankService: BankService) {
  }
}
