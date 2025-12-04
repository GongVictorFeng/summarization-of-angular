import { Component, ViewChild } from '@angular/core';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSES } from '../db-data';
import { Course } from '../model/course';

@Component({
  selector: 'app-root',
  imports: [CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  courses: Course[] = [...COURSES];

  @ViewChild(CourseCardComponent)
  card!: CourseCardComponent;

  onCourseSelected(course: Course) {
    console.log(this.card);
  }

  //The first argument of tracking function is index, the second one is the element in the iterable
  trackCourse(index: number, course: Course) {
    return course.id;
  }
}
