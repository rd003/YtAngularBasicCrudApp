import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormGroupDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { status } from 'src/app/models/status';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-update-student',
  templateUrl: './add-update-student.component.html',
  styleUrls: ['./add-update-student.component.css']
})
export class AddUpdateStudentComponent implements OnInit {

  constructor(private fb:FormBuilder,private studentService:StudentService,private route:ActivatedRoute) { }

   frm!:FormGroup;
   status!:status

  ngOnInit(): void {
    this.frm=this.fb.group({
      'id':[0],
      'name':['',Validators.required],
      'age':['',Validators.required],
    })

    var id = this.route.snapshot.params['id'];
    if(id){
      this.studentService.getbyid(id).subscribe({
        next:(data)=>{
          this.frm.patchValue(data);
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }
  }
 
  get f(){
    return this.frm.controls;
  }

  onPost(formGroupDirective:FormGroupDirective){
    this.status= {statusCode:0,message:'wait...'};
    console.log(this.frm.value);
    this.studentService.addUpdate(this.frm.value).subscribe({
      next: (resp)=>{
        this.status=resp;
        if(resp.statusCode){
          var id:number|null=this.frm.get('id')?.value;
          console.log(id);
          if(id==0){
          this.frm.reset();
          formGroupDirective.resetForm();
          }
        }
      },
      error:(err)=>{console.log(err);
    this.status= {statusCode:0,message:'error has occured in server side'};
      
      }
    })
  }

}
