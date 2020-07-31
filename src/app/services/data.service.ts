import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { matriculesMock } from '../mock/matricules.mock';
import { collegueMock } from '../mock/collegues.mock';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // Service rechercher par nom (afficher matricules)
  rechercherParNom(): string[] {
    return matriculesMock.map(m => m.matricule);
  }

  // Service récupérer informations collègue
  recupererCollegueCourant(): Collegue {
    return collegueMock;
  }
}
