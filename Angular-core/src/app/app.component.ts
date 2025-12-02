import { Component } from '@angular/core';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSES } from '../db-data';
import { Course } from '../model/course';
import {
  DatePipe,
  DecimalPipe,
  SlicePipe,
  UpperCasePipe,
} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    CourseCardComponent,
    DatePipe,
    UpperCasePipe,
    DecimalPipe,
    SlicePipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  courses: Course[] = [...COURSES];
  startDate = new Date(2000, 0, 1);
  title = COURSES[0].description;
  price = 9.9924563789;

  onCourseSelected(course: Course) {
    console.log('App component - click event bubbled ...', course);
  }

  //The first argument of tracking function is index, the second one is the element in the iterable
  trackCourse(index: number, course: Course) {
    return course.id;
  }
}
