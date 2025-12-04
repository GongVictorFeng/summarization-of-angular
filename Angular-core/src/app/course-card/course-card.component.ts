import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../model/course';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [NgClass, NgIf],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input({
    required: true,
  })
  course!: Course;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onCourseViewed() {
    console.log('card component - button clicked ...');
    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    // return a configuration object
    return {
      beginner: this.course.category == 'BEGINNER',
    };
    // return a string
    if (this.course.category == 'BEGINNER') return 'beginner';
    // return a array
    if (this.course.category == 'BEGINNER') return ['beginner'];
  }
}
