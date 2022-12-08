import { Component } from '@angular/core';
import {Student} from "../../models/student";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent {

  fName:string = '';
  lName:string = '';
  email:string = '';
  phone:string = '';
  address:string = '';

  constructor(private studentService:StudentService) { }
  onSubmitted() {
    const student:Student = {
      fName: this.fName,
      lName: this.lName,
      email: this.email,
      phone: this.phone,
      address: this.address
    }
    this.studentService.addStudent(student).subscribe((student:any) => {
      console.log(student);
    });
  }

}
