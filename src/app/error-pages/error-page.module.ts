import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForbiddenPageComponent} from "./forbidden-page/forbidden-page.component";



@NgModule({
  declarations: [
    ForbiddenPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ErrorPageModule { }
