import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiButtonModule,
  TuiSvgModule,
  TuiHostedDropdownModule,
  TuiDataListModule,
  TuiDropdownModule,
  TuiModeModule,
  TuiTextfieldControllerModule
} from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import {TuiBlockStatusModule} from "@taiga-ui/layout";
import {
    TuiAvatarModule,
    TuiCarouselModule,
    TuiDataListDropdownManagerModule, TuiInputModule,
    TuiIslandModule,
    TuiPaginationModule
} from "@taiga-ui/kit";
import { TelegramLoginWidgetComponent } from './auth/telegram-login-widget/telegram-login-widget.component';
import {HttpClientModule} from "@angular/common/http";
import { StudentProfileComponent } from './students/student-profile/student-profile.component';
import {StudentsModule} from "./students/students.module";
import { TutorProfileComponent } from './tutors/tutor-profile/tutor-profile.component';
import {TutorsModule} from "./tutors/tutors.module";
import { ForbiddenPageComponent } from './error-pages/forbidden-page/forbidden-page.component';
import {ErrorPageModule} from "./error-pages/error-page.module";
import {TuiActiveZoneModule, TuiForModule, TuiSwipeModule} from "@taiga-ui/cdk";
import { NavbarComponent } from './navbar/navbar.component';
import { LessonPageComponent } from './pages/lesson-page/lesson-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import {ModalComponent} from "./modal/modal.component";
import { CoursesComponent } from './courses/courses.component';
import {TuiMoneyModule} from "@taiga-ui/addon-commerce";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    TelegramLoginWidgetComponent,
    NavbarComponent,
    LessonPageComponent,
    AboutPageComponent,
    ProfilePageComponent,
    CoursesComponent,
  ],
  imports: [
    StudentsModule,
    TutorsModule,
    ErrorPageModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiBlockStatusModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiIslandModule,
    HttpClientModule,
    TuiAvatarModule,
    TuiHostedDropdownModule,
    TuiDataListModule,
    TuiDataListDropdownManagerModule,
    TuiActiveZoneModule,
    TuiDropdownModule,
    TuiForModule,
    TuiModeModule,
    TuiCarouselModule,
    TuiPaginationModule,
    TuiSwipeModule,
    ModalComponent,
    TuiMoneyModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
