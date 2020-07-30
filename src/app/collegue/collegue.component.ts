import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';

// Identité d'un collègue
@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  // Module Input
  @Input()
  col: Collegue;

  ngOnInit(): void {
  }

  // Créer un collègue
  creer(): void {
    console.log('Création d’un nouveau collègue');
  }

  // Modifier un collègue
  modifier(): void {
    console.log('Modification du collègue');
  }

}
