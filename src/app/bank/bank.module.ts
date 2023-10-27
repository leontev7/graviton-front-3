import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WalletComponent} from "./wallet/wallet.component";
import {TuiInputModule, TuiInputNumberModule, TuiIslandModule} from "@taiga-ui/kit";
import {TuiMoneyModule} from "@taiga-ui/addon-commerce";
import {ModalComponent} from "../modal/modal.component";
import {TuiButtonModule, TuiDialogModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TuiAutoFocusModule} from "@taiga-ui/cdk";



@NgModule({
  declarations: [
    WalletComponent
  ],
  exports: [
    WalletComponent
  ],
  imports: [
    CommonModule,
    TuiIslandModule,
    TuiMoneyModule,
    ModalComponent,
    TuiButtonModule,
    TuiDialogModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiAutoFocusModule,
    TuiInputNumberModule,
    TuiTextfieldControllerModule,
    FormsModule
  ]
})
export class BankModule { }
