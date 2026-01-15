import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from '../model/course';
import { CourseImageComponent } from './course-image/course-image.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { CoursesService } from './services/courses.service';
import { AppConfig, CONFIG_TOKEN } from './config';

@Component({
  selector: 'app-root',
  imports: [
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    NgIf,
    NgFor,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, AfterViewInit {
  courses!: Course[];

  @ViewChild(HighlightedDirective)
  highlighted!: HighlightedDirective;

  @ViewChildren(CourseCardComponent)
  cards!: QueryList<CourseCardComponent>;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private appConfig: AppConfig
  ) {
    console.log(this.appConfig);
  }

  ngOnInit(): void {
    this.coursesService
      .loadCourses()
      .subscribe((courses) => (this.courses = courses));
  }

  onEditTitle() {}
  ngAfterViewInit(): void {
    console.log(this.highlighted);
  }

  onToggle(isHighlighted: boolean) {
    console.log(isHighlighted);
  }
  save(course: Course) {
    this.coursesService
      .saveCourse(course)
      .subscribe(() => console.log('course saved'));
  }

  //The first argument of tracking function is index, the second one is the element in the iterable
  trackCourse(index: number, course: Course) {
    return course.id;
  }
}
