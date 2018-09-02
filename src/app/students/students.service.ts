import { Injectable } from '@angular/core';
import { Student } from "../interface/Student";
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable()
export class StudentsService {

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get<Student[]>('http://localhost:3333/api/v1/students');
  }

  delete(student) {
    return this.httpClient.delete<Student[]>('http://localhost:3333/api/v1/students/'+student.id);
  }

  post(data) {
    return this.httpClient.post('http://localhost:3333/api/v1/students', data);
  }

}
