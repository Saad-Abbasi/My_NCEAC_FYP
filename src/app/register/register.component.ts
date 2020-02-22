import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,Validators} from '@angular/forms'
import{LoginService} from '../shared/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    username:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required]
  })
  constructor( private fb: FormBuilder,
               private reg: LoginService
    ) { }

  ngOnInit() {
  }
  register():void{
    this.reg.register(this.registerForm.value).subscribe((data)=>{
      alert(this.registerForm.value.username +"  Successfully Registerd");
    })
  }

}
