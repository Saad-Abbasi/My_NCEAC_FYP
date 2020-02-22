import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators ,FormGroup,FormArray,FormControl} from '@angular/forms'
import { TeacherServiceService } from '../shared/teacher/teacher-service.service';
import {ActivatedRoute,Router} from '@angular/router';
import {Teacher} from '../shared/teacher/teacher';



@Component({
  selector: 'app-addteacher',
  templateUrl: './addteacher.component.html',
  styleUrls: ['./addteacher.component.css']
})
export class AddteacherComponent implements OnInit {
  teacherform:FormGroup;
  teacher: Teacher;
  FormTitle:String;
  filesChosen:boolean;
  

  

 
  constructor(private fb: FormBuilder,
    private teacherService: TeacherServiceService,
    private route : ActivatedRoute,
    private router : Router
    
    ) { }
    public information =[];
  

  ngOnInit() {

    this.teacherform = this.fb.group({
      t_p_img: [''],
      t_id: [''],
      t_name: [''],
      t_desig: [''],
      t_dob: [''],
      t_pswd: ['',[Validators.required,Validators.minLength(6)]],
      t_email: ['',[Validators.required,Validators.email]],
      t_gender: [''],
      t_phone: [''],
      t_quali: [''],
      t_address: ['']
       });



    this.route.paramMap.subscribe(params=>{
      const techId = params.get('id');
      if(techId){
        this.filesChosen = false;
        this.FormTitle = "Update Teacher Form";
       this.getTeacherr(techId);
      }
      else{
        this.filesChosen = true;
        this.FormTitle = "Teacher Registration Form";
        this.teacher = {
          t_id:null,
          t_name:'',
          t_desig: '',
          t_dob:null,
          t_email:'',
          t_pswd:'',
          t_gender:'',
          t_phone:null,
          t_quali:'',
          t_p_img:'',
          t_address:'',
          _id:null,
          courses:[]
        }
      }
    });

  }//
  selectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.teacherform.get('t_p_img').setValue(file);
    }
  }


  saveRecord():void {
    var formData:any = new FormData();
    var t_p_image = this.teacherform.value.t_p_img;
    var t_email = this.teacherform.value.t_email;
    var t_id = this.teacherform.value.t_id;
    var t_name = this.teacherform.value.t_name;
    var t_desig = this.teacherform.value.t_desig;
    var t_dob = this.teacherform.value.t_dob;
    var t_pswd = this.teacherform.value.t_pswd;
    var t_gender = this.teacherform.value.t_gender;
    var t_phone = this.teacherform.value.t_phone;
    var  t_quali = this.teacherform.value.t_quali;
    var  t_address= this.teacherform.value.t_address
    formData.append('file',t_p_image) ;
    formData.append('t_id',t_id) ;
    formData.append('t_name',t_name);
    formData.append('t_desig',t_desig);
    formData.append('t_dob',t_dob);
    formData.append('t_pswd',t_pswd);
    formData.append('t_email',t_email);
    formData.append('t_gender',t_gender);
    formData.append('t_phone',t_phone);
    formData.append('t_quali',t_quali);
    formData.append('t_address',t_address);
    
   
    
    // console.log(formData)
    

    
    
    if(this.teacher._id){
       this.MapFormValuesToTeacherModel();
    this.teacherService.updateTeacher(this.teacher).subscribe(
      ()=>this.router.navigate(['teacher']),
      (err:any)=>console.log(err)

      
    );
  }else{
    
    this.teacherService.createTeacher(formData).subscribe(
      ()=>this.router.navigate(['teacher']),
      (err:any)=>console.log(err)

    );}
     }
   MapFormValuesToTeacherModel(){
   
   this.teacher.t_p_img = this.teacherform.value.t_p_img,
    this.teacher.t_id = this.teacherform.value.t_id,
    this.teacher.t_name = this.teacherform.value.t_name,
    this.teacher.t_desig = this.teacherform.value.t_desig,
    this.teacher.t_dob = this.teacherform.value.t_dob,
    this.teacher.t_pswd = this.teacherform.value.t_pswd,
    this.teacher.t_email= this.teacherform.value.t_email,
    this.teacher.t_gender = this.teacherform.value.t_gender,
    this.teacher.t_phone = this.teacherform.value.t_phone,
    this.teacher.t_quali = this.teacherform.value.t_quali,
    this.teacher.t_address = this.teacherform.value.t_address
  }
  
  getTeacherr(techId:any){
    this.teacherService.getTeacher(techId).subscribe(
      (teacher:Teacher)=>{
        this.editTeacher(teacher);
        this.teacher = teacher
       } ,
      (err:any)=>{
        console.log(err);
      }
      
    )
    
  }
  


editTeacher(teacher:Teacher){
 this.teacherform.patchValue({
    t_p_img:teacher.t_p_img,
     t_id: teacher.t_id,
    t_name: teacher.t_name,
    t_desig: teacher.t_desig,
    t_dob: teacher.t_dob,
    t_pswd: teacher.t_pswd,
    t_email: teacher.t_email,
    t_gender: teacher.t_gender,
    t_phone: teacher.t_phone,
    t_quali: teacher.t_quali,
    t_address: teacher.t_address
    });
}
//validation 
get f() { return this.teacherform.controls; }

today = new Date();
 minAge = 18;
  MinAge = this.today;
  //  new Date(this.today.getFullYear() - this.minAge, this.today.getMonth(), this.today.getDate());

}
