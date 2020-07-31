import { Component, OnInit } from '@angular/core';
import { matriculesMock } from '../mock/matricules.mock';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  // Récupération de la liste des matricules
  matriculesMock = matriculesMock;
  recherche = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Afficher la liste des matricules
  rechercher(): void {
    this.recherche = true;
  }

}
