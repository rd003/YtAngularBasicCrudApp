import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {

  constructor(private studentService:StudentService,private router:Router) {

   }

   students!:student[];

   onEdit(id:number){
    this.router.navigate([`/update-student/${id}`]);
   }

   onDelete(id:number,index:number){
     if(window.confirm('are you sure to delete?')){
      this.studentService.delete(id).subscribe({
        next:(data)=>{
          if(data.statusCode==1){
             this.students.splice(index,1);
          }
          else{
            alert("record could not deleted");
          }
        },
        error:(err)=>{console.log(err)}
      })
     }
   }

   private getStudents(){
       this.studentService.getAll().subscribe({
        next:(data)=>{
          this.students=data;
        },
        error:(err)=>console.log(err)
       })
   }

  ngOnInit(): void {
    this.getStudents();
  }

}
