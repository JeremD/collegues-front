import { Component, OnInit, Input } from '@angular/core';
import { collegueMock as collegue } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';

// Identité d'un collègue
@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent {

  constructor() {
    this.matricule = collegue.matricule;
    this.nom = collegue.nom;
    this.prenoms = collegue.prenoms;
    this.email = collegue.email;
    this.dateDeNaissance =
      collegue.dateDeNaissance.getDate() + '/' +
      collegue.dateDeNaissance.getMonth() + '/' +
      collegue.dateDeNaissance.getFullYear();
    this.photoUrl = collegue.photoUrl;
  }

  matricule: string;
  nom: string;
  prenoms: string;
  email: string;
  dateDeNaissance: string;
  photoUrl: string;

  // Module Input
  @Input()
  col: Collegue; // ajout d'une propriété

  // Créer un collègue
  creer(): void {
    console.log('Création d’un nouveau collègue');
  }

  // Modifier un collègue
  modifier(): void {
    console.log('Modification du collègue');
  }

}
