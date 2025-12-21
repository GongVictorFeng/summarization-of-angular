import {
  AfterViewInit,
  Component,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSES } from '../db-data';
import { Course } from '../model/course';
import { CourseImageComponent } from './course-image/course-image.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgIf } from '@angular/common';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';

@Component({
  selector: 'app-root',
  imports: [
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    NgIf,
    NgxUnlessDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  courses: Course[] = [...COURSES];

  @ViewChild(HighlightedDirective)
  highlighted!: HighlightedDirective;

  @ViewChildren(CourseCardComponent)
  cards!: QueryList<CourseCardComponent>;

  ngAfterViewInit(): void {
    console.log(this.highlighted);
  }

  onToggle(isHighlighted: boolean) {
    console.log(isHighlighted);
  }
  onCourseSelected(course: Course) {}

  //The first argument of tracking function is index, the second one is the element in the iterable
  trackCourse(index: number, course: Course) {
    return course.id;
  }
}
