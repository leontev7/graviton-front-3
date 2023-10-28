import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./auth/login-page/login-page.component";
import {MainPageComponent} from "./pages/main-page/main-page.component";
import {ForbiddenPageComponent} from "./error-pages/forbidden-page/forbidden-page.component";
import {AuthGuard} from "./auth.guard";
import {StudentProfileComponent} from "./students/student-profile/student-profile.component";
import {TutorProfileComponent} from "./tutors/tutor-profile/tutor-profile.component";
import {LessonPageComponent} from "./pages/lesson-page/lesson-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {CoursesComponent} from "./courses/courses.component";
import {StudentsComponent} from "./admin/students/students.component";
import {TutorsComponent} from "./admin/tutors/tutors.component";
import {TasksComponent} from "./admin/tasks/tasks.component";

const routes: Routes = [
  { path: "", component: MainPageComponent, title: "Graviton – Онлайн школа" },
  { path: "login", component: LoginPageComponent, title: "Вход" },
  { path: "about", component: AboutPageComponent, title: "О школе" },
  { path: "lessons", component: LessonPageComponent, title: "Мои занятия" },


  // Role based pages
  { path: "profile", component: ProfilePageComponent, title: "Профиль", canActivate: [AuthGuard], data: { roles: ['ROLE_TUTOR', 'ROLE_STUDENT'] }},

  // Admin
  { path: "students", component: StudentsComponent, title: "Ученики", canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN'] }},
  { path: "tutors", component: TutorsComponent, title: "Преподаватели", canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN'] }},
  { path: "courses", component: CoursesComponent, title: "Курсы", canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN'] } },
  { path: "tasks", component: TasksComponent, title: "Задания", canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN'] }},

  // Errors
  { path: "403", component: ForbiddenPageComponent, title: "Доступ запрещен" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
