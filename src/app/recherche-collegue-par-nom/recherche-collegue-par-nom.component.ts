import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  // Matricules masqués
  recherche = false;

  // Récupération de la liste des matricules
  matriculeTab: string[];

  // Appel du service matricule
  constructor(private matriculeSrv: DataService) { }

  ngOnInit(): void {
    this.matriculeTab = this.matriculeSrv.rechercherParNom();
  }

  // Afficher la liste des matricules
  rechercher(): void {
    this.recherche = true;
  }

}
