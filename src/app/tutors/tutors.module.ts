import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TutorProfileComponent} from "./tutor-profile/tutor-profile.component";
import { TutorsComponent } from '../admin/tutors/tutors.component';



@NgModule({
    declarations: [
        TutorProfileComponent,
    ],
    exports: [
        TutorProfileComponent
    ],
    imports: [
        CommonModule
    ]
})
export class TutorsModule { }
