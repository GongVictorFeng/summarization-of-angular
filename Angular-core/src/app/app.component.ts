import {
  AfterViewInit,
  Component,
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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    NgIf,
    NgFor,
    HttpClientModule,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, AfterViewInit {
  courses$!: Observable<Course[]>;

  @ViewChild(HighlightedDirective)
  highlighted!: HighlightedDirective;

  @ViewChildren(CourseCardComponent)
  cards!: QueryList<CourseCardComponent>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.courses$ = this.http.get<Course[]>('api/courses');
  }
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
