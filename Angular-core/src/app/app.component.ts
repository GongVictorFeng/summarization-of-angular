import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular-core';

  onLogoClicked() {
    alert('Hello World');
  }

  onKeyUp(titleValue: string) {
    this.title = titleValue;
  }
}
