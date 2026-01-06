import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../model/course';
import { NgClass } from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [NgClass],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input({
    required: true,
  })
  course!: Course;

  @Output()
  courseChanged = new EventEmitter<Course>();

  onSaveClicked(description: string) {
    this.courseChanged.emit({ ...this.course, description });
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
