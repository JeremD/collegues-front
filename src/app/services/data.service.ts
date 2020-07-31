import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { matriculesMock } from '../mock/matricules.mock';
import { collegueMock } from '../mock/collegues.mock';
import { environment } from '../../environments/environment';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // url du serveur
  URL_BACKEND = environment.backendUrl;

  constructor(private http: HttpClient) { }

  // Création du Subject matricule
  subjectMatricule = new Subject<string>();

  // Service rechercher par nom
  rechercherParNom(nom: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.URL_BACKEND}collegues?nom=${nom}`);
  }

  // Observable
  sabonnerAuNom(): Observable<string> {
    return this.subjectMatricule.asObservable();
  }

  // Publication du matricule
  selectionner(matricule: string): void {
    return this.subjectMatricule.next(matricule);
  }

  // Service récupérer informations collègue
  recupererCollegueCourant(): Collegue {
    return collegueMock;
  }
}
