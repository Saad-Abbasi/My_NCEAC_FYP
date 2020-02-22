import { Component, OnInit } from '@angular/core';
import {FormBuilder,ReactiveFormsModule,FormControl, Validators, FormGroup} from '@angular/forms';
import {LoginService} from '../shared/login.service'
import { Login } from '../shared/login';
import { Router } from '@angular/router';
import { error } from 'protractor';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  information:any;
  Message:string;
  loginForm:FormGroup;
  submitted = false;
  success:string;
 
 

  constructor(
            
              private  api : LoginService,
              private fb : FormBuilder,
              private router: Router
    ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      t_email: ['', [Validators.required]],
      t_pswd: ['', [Validators.required, Validators.minLength(5)]],
      // t_email: ['',Validators.required],
      // t_pswd: ['',Validators.required],
      usertype: ['',Validators.required]
      
    });
    localStorage.clear();
  }

  onSubmit():any{
    this.submitted = true;
    

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
      else {
           if(this.loginForm.value.usertype == "teacher")
        {
        this.api.login(this.loginForm.value).subscribe((data)=>{
          this.information =data;
           console.log(this.information);
           setTimeout(()=>{
             this.success="Logged In";
           },5)
            this.router.navigate(['t_home',this.information._id]);
          }, (err)=>{
            if(err.status === 404){
              console.log(err.message)
            }
          }
          );
      }
      else{
        this.api.loginAdmin(this.loginForm.value).subscribe((data)=>{

            localStorage.setItem('token',data.token);
           this.router.navigate(['/admin']);
           });
      }
    }
    this.success = "Succefully Logged in "
    }
  
    get f() { return this.loginForm.controls; }
  

    // wait function 


    


/*this.api.login().subscribe((data)=>{
  console.log(data);
  this.information = data;
});*/
}
