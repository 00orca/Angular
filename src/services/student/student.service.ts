import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { STUDENTS_MOCKED } from 'src/mocks/students.mock';
import { Student } from 'src/models/student';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  public studentList: Student[] = STUDENTS_MOCKED;
  public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);
  
  constructor() {
  }
  
}