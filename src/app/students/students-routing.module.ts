import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from "./student-list/student-list.component";
import { StudentAddComponent } from "./student-add/student-add.component";
const routes: Routes = [
  {
    path: '',
    component: StudentListComponent
  },
  {
    path: 'add',
    component: StudentAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
