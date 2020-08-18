import { Component } from '@angular/core';
import { collegueMock } from './mock/collegues.mock';
import { matriculesMock } from './mock/matricules.mock';
import { environment } from 'src/environments/environment';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  // Injection du DataService
  providers: [
    DataService
  ]
})

// Entrées dans le html
export class AppComponent {
  title = 'Administration Collègues';
  collegue = collegueMock;
  matricule = matriculesMock;
}
