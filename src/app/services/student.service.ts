import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import * as fs from "fs";
import {students} from "../data/students";
import {Student} from "../models/student";


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students:any[] = [];
  constructor() {
    const dataArr = students;
    this.students = dataArr;
  }

  getStudents():Observable<any> {
    const studentsObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.students);
      }, 1000);
    });
    return studentsObservable
  }

  addStudent(student:Student):Observable<any> {
    console.log(student);
    const studentObservable = new Observable(observer => {
      setTimeout(() => {
        this.students.unshift(student);
        observer.next(student);
      }, 1000);
    });
    return studentObservable;

  }
}
