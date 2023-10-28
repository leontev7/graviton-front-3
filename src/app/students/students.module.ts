import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentProfileComponent} from "./student-profile/student-profile.component";
import {TuiIslandModule} from "@taiga-ui/kit";
import {TuiButtonModule, TuiCalendarModule} from "@taiga-ui/core";
import {ModalComponent} from "../modal/modal.component";
import {TuiMoneyModule} from "@taiga-ui/addon-commerce";
import {WalletComponent} from "../bank/wallet/wallet.component";
import {BankModule} from "../bank/bank.module";
import {TuiPieChartModule, TuiRingChartModule} from "@taiga-ui/addon-charts";
import { StudentsComponent } from '../admin/students/students.component';



@NgModule({
    declarations: [
        StudentProfileComponent,
    ],
    exports: [
        StudentProfileComponent
    ],
  imports: [
    CommonModule,
    TuiIslandModule,
    TuiCalendarModule,
    ModalComponent,
    TuiMoneyModule,
    TuiButtonModule,
    BankModule,
    TuiPieChartModule,
    TuiRingChartModule
  ]
})
export class StudentsModule { }
