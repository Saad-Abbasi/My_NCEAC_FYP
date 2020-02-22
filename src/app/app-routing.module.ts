import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component'
import { TeacherComponent } from './teacher/teacher.component';
import { CourseComponent } from './course/course.component';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { ManagecoursesComponent } from './managecourses/managecourses.component';
import {AddsessionComponent} from './addsession/addsession.component';
import {THomeComponent} from './t-home/t-home.component';
import {TperformaComponent} from './tperforma/tperforma.component';
import {TpsubmissionComponent} from './tpsubmission/tpsubmission.component';
import { ViewsessionComponent } from './viewsession/viewsession.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { ReportComponent } from './report/report.component';
import{CourseDescriptionFormComponent} from './course-description-form/course-description-form.component';
import{AuthGuard} from './auth.guard'
import { BlogComponent } from './blog/blog.component';
import{BlogpostsComponent} from './blogposts/blogposts.component'



const routes: Routes = [
  
  {path:'login', component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'viewCourse',component:ViewcourseComponent},
  {path:'addCourse',component:AddcourseComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin' , component: AdminComponent,canActivate:[AuthGuard]},
  {path:'teacher', component:TeacherComponent},
  {path:'course',component:CourseComponent},
  {path:'viewcourse', component:ViewcourseComponent},
  {path:'addteacher', component:AddteacherComponent},
  {path:'managecourse',component:ManagecoursesComponent},
  {path:'addsession',component:AddsessionComponent},
  {path:'t_home/:id',component:THomeComponent},
  {path:'tperforma/:id',component:TperformaComponent},
   {path:'tpsubmission/:id',component:TpsubmissionComponent},
  {path:'viewsession',component:ViewsessionComponent},
  {path:'addbook',component:BookComponent},
  {path:'books',component:BooksComponent},
  {path:'edit/:id',component:AddteacherComponent},
  {path:'report/:id',component:ReportComponent},
  {path:'coursereport/:id',component:CourseDescriptionFormComponent},
  {path:'blog',component:BlogComponent},
  {path:'blogposts',component:BlogpostsComponent},
   { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: '**',component:PageNotFoundComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
