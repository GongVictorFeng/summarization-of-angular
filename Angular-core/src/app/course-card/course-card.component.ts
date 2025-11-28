import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../model/course';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [NgClass, NgStyle],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input({
    required: true,
  })
  course!: Course;

  @Input({
    required: true,
  })
  index!: number;

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

  cardStyles() {
    return {
      'background-image': 'url(' + this.course.iconUrl + ')',
    };
  }
}
