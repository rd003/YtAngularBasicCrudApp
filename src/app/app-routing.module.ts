import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUpdateStudentComponent } from './components/add-update-student/add-update-student.component';
import { DisplayStudentComponent } from './components/display-student/display-student.component';

const routes: Routes = [
  {path:'add-student',component:AddUpdateStudentComponent},
  {path:'update-student/:id',component:AddUpdateStudentComponent},
  {path:'display-students',component:DisplayStudentComponent},
  {path:'',redirectTo:"add-student",pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
