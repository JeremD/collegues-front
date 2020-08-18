import { ColleguePhoto } from './../domains/collegue.photo';
import { NewCollegue } from './../domains/collegue';
import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { environment } from '../../environments/environment';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' // accessbiel dans toute l'app
})
export class DataService {

  // url du serveur
  URL_BACKEND = environment.backendUrl;

  // Objet collègue
  nouveauCollegue: NewCollegue;

  // Appel du module http
  constructor(private http: HttpClient) { }

  // Création du Subject Collegue
  subjectCollegue = new Subject<Collegue>();

  /**
   * Rechercher un collègue par son nom (GET)
   */
  rechercherParNom(nom: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.URL_BACKEND}collegues?nom=${nom}`);
  }

  /**
   * Récupérer photos de tous les collègues (GET)
   */
  recupererColleguesPhotos(): Observable<ColleguePhoto[]> {
    return this.http.get<ColleguePhoto[]>(`${this.URL_BACKEND}collegues/photos`);
  }

  /**
   * Récupérer un collègue depuis son matricule (GET)
   */
  recupererCollegueCourant(mattricule: string): Observable<Collegue> {
    return this.http.get<Collegue>(`${this.URL_BACKEND}collegues?nom=${mattricule}`);
  }

  /**
   * Créer un nouveau collègue (POST)
   */
  creerCollegue(nouveauCollegue: NewCollegue): Observable<Collegue> {
    return this.http.post<Collegue>(
      `${this.URL_BACKEND}collegues`, nouveauCollegue
    );
  }

  /**
   * S'abonner au flux de collègue
   */
  sabonnerAuCollegue(): Observable<Collegue> {
    return this.subjectCollegue.asObservable();
  }

  /**
   * Publier les données de collègue
   */
  selectionner(matricule: string): Observable<Collegue> {
    return this.recupererCollegueCourant(matricule).pipe(
      tap(collegue => this.subjectCollegue.next(collegue))
    );
  }

}
