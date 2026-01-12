import {
  AfterViewInit,
  Component,
  Inject,
  InjectionToken,
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
import { HttpClient } from '@angular/common/http';

function coursesServiceProvider(http: HttpClient): CoursesService {
  return new CoursesService(http);
}

export const COURSES_SERVICE = new InjectionToken<CoursesService>(
  'COURSES_SERVICE'
);

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
  providers: [
    {
      provide: COURSES_SERVICE,
      useFactory: coursesServiceProvider,
      deps: [HttpClient],
    },
  ],
})
export class AppComponent implements OnInit, AfterViewInit {
  courses$!: Observable<Course[]>;

  @ViewChild(HighlightedDirective)
  highlighted!: HighlightedDirective;

  @ViewChildren(CourseCardComponent)
  cards!: QueryList<CourseCardComponent>;

  constructor(
    @Inject(COURSES_SERVICE) private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.courses$ = this.coursesService.loadCourses();
  }
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
