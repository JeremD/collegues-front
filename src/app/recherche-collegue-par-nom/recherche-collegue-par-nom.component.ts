import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit, OnDestroy {

  // Matricules masqués
  recherche = false;

  // Abonnement
  collegueRecherche: Subscription;

  // Tableau de matricules
  matriculeTab: string[];

  // Appel du service matricule
  constructor(private collegueServ: DataService) { }

  ngOnInit(): void {
    this.matriculeTab = [];
  }

  // Afficher la liste des matricules
  rechercher(saisie: HTMLInputElement): void {
    this.collegueServ.rechercherParNom(saisie.value).subscribe(
      mat => this.matriculeTab = mat,
      err => console.error(err),
      () => { }
    );
  }

  // select(matricule: string): void {
  //   this.collegueServ.selectionner(matricule).subscribe(
  //     err => console.error(err),
  //     () => { }
  //   );
  // }

  ngOnDestroy(): void {
    this.collegueRecherche.unsubscribe();
  }

}
