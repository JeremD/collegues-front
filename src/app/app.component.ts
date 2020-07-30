import { Component } from '@angular/core';
import { collegueMock } from './mock/collegues.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Entrées dans le html
export class AppComponent {
  title = 'collegues-front';
  collegueMock = collegueMock;
}
