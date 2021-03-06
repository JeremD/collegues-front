import { Collegue } from './../models/Collegue';
import { NewCollegue } from './../domains/collegue';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-creation-collegue',
  templateUrl: './creation-collegue.component.html',
  styleUrls: ['./creation-collegue.component.css']
})
export class CreationCollegueComponent implements OnInit {

  // Collègue et nouveau collègue
  collegue: Collegue;
  collegueNouveau: NewCollegue;

  // Appel du service collègue
  constructor(private collegueServ: DataService) { }

  // Données du formulaire
  ngOnInit(): void {
    this.collegueNouveau = {
      nom: '',
      prenom: '',
      dateDeNaissance: null,
      email: '',
      photoUrl: ''
    };
  }

  // Créer un collègue dans le formulaire
  submit(): void {
      this.collegueServ.creerCollegue(this.collegueNouveau).subscribe(
        col => this.collegue = col,
        err => console.error(err)
      );
  }
}
