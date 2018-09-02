import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentsService } from "../students.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  formStudent: FormGroup;
  constructor(private studentService: StudentsService, private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formStudent = new FormGroup({
      'nisn': new FormControl(null, [Validators.required]),
      'name': new FormControl(null, [Validators.required]),
      'study': new FormControl(null, [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    const data = this.formStudent.value;
    this.studentService.post(data).subscribe(
      response => {
        this.router.navigate(['students']);
      },
      error => {
        alert('error' + error);
      }
    );
  }
}
