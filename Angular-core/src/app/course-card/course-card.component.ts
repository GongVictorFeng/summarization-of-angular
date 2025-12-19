import {
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChild,
  ElementRef,
  AfterViewInit,
  TemplateRef,
} from '@angular/core';
import { Course } from '../../model/course';
import { NgClass, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [NgClass, NgTemplateOutlet],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent implements AfterViewInit {
  @Input({
    required: true,
  })
  course!: Course;

  @Input()
  emptyImgTml!: TemplateRef<any>;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @ContentChild('courseImage')
  image!: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.image);
  }

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
