import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { student } from '../models/student';
import { status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
   baseUrl = environment.baseUrl+'/student';

  addUpdate(model:student){
     return this.http.post<status>(this.baseUrl+'/addupdate',model);
  }

  getbyid(id:number){
    return this.http.get<student>(this.baseUrl+`/getbyid/${id}`);
 }

 delete(id:number){
  return this.http.delete<status>(this.baseUrl+`/delete/${id}`);
}

  getAll(){
    return this.http.get<student[]>(this.baseUrl+'/getall');
  }
  constructor(private http:HttpClient) { }
}
