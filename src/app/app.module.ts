import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import{ReactiveFormsModule} from "@angular/forms";
import {ResApiService} from "./res-api.service";
import {RegisterComponent} from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { TeacherComponent } from './teacher/teacher.component';
import { CourseComponent } from './course/course.component';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { ManagecoursesComponent } from './managecourses/managecourses.component';
import { AddsessionComponent } from './addsession/addsession.component';
import { THomeComponent } from './t-home/t-home.component';
import { DformComponent } from './dform/dform.component';
import { TperformaComponent } from './tperforma/tperforma.component';
 import {TpsubmissionComponent} from './tpsubmission/tpsubmission.component';
import { ViewsessionComponent } from './viewsession/viewsession.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { ReportComponent } from './report/report.component';
import {NgxPrintModule} from 'ngx-print';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { CourseDescriptionFormComponent } from './course-description-form/course-description-form.component';
import { AuthGuard } from './auth.guard';
import { BlogComponent } from './blog/blog.component';
import { BlogpostsComponent } from './blogposts/blogposts.component';





@NgModule({
  declarations: [
    AppComponent,
   PageNotFoundComponent,
    LoginComponent,
    DashboardComponent,
    ViewcourseComponent,
    AddcourseComponent,
    RegisterComponent,
    AdminComponent,
    TeacherComponent,
    CourseComponent,
    AddteacherComponent,
    ManagecoursesComponent,
    AddsessionComponent,
    THomeComponent,
    DformComponent,
    TperformaComponent,
    TpsubmissionComponent,
    ViewsessionComponent,
    BookComponent,
    BooksComponent,
    ReportComponent,
    FooterComponent,
    HeaderComponent,
    CourseDescriptionFormComponent,
    BlogComponent,
    BlogpostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPrintModule
    
  
  

  ],
  providers: [ResApiService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
