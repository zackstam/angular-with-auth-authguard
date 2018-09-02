import { Component, OnInit } from '@angular/core';
import { Student } from "../../interface/Student";
import { StudentsService } from "../students.service";
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  displayedColumns: string[];
  dataSource: Student[];

  constructor( 
    private studentService: StudentsService
  ) { 
    this.displayedColumns = ['nisn', 'name', 'study', 'action'];
  }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.studentService.getData().subscribe(response => {
      this.dataSource = response
    }, error => console.log(error))
  }

  onDeleteClick(student) {
    this.studentService.delete(student).subscribe(student => {
      this.getData();
    }, error => console.log(error));
  }

  onAddClick(){
    console.log('hello')
  }

}
