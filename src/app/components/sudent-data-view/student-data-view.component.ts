import { Component } from '@angular/core';
import {StudentService} from "../../services/student.service";
import {Student} from "../../models/student";

@Component({
  selector: 'app-sudent-data-view',
  templateUrl: './student-data-view.component.html',
  styleUrls: ['./student-data-view.component.scss']
})
export class StudentDataViewComponent {


  students:any[] = [];
  constructor(private studentService:StudentService) {
    studentService.getStudents().subscribe((students:any[]) => {
      this.students = students;
      console.log(this.students);
    });
  }



}
