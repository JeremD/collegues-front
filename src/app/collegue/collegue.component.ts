import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs/internal/Subscription';

// Identité d'un collègue
@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit, OnDestroy {

  // Module Input
  @Input()
  col: Collegue;  // appel du collègue

  // Interversion boutons modifier / valider
  switchBtn = false;

  // Abonnement
  collegueSelectionne: Subscription;

  // Appel du service collègue
  constructor(private collegueServ: DataService) { }

  // Récupérer informations collègue au démarrage (injection de dépendance par Type)
  ngOnInit(): void {
    this.collegueSelectionne = this.collegueServ.sabonnerAuCollegue().subscribe(
      col => this.col = col,
      err => console.error(err),
    );
  }

  // Destruction de l'abonnement
  ngOnDestroy(): void {
    this.collegueSelectionne.unsubscribe();
  }

  // Modifier un collègue
  modifier(): void {
    this.switchBtn = true;
    console.log('Modification du collègue');
  }

  // Valider
  valider(): void {
    this.switchBtn = false;
  }

  // Créer un collègue
  creer(): void {
    console.log('Création d’un nouveau collègue');
  }

}
