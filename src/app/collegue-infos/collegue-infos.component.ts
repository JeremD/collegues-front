import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-collegue-infos',
  templateUrl: './collegue-infos.component.html',
  styleUrls: ['./collegue-infos.component.css']
})
export class CollegueInfosComponent implements OnInit, OnDestroy {

  // Module Input
  @Input()
  col: Collegue;

  // Numéro matricule
  mat: number;

  // Abonnement
  collegueInfos: Subscription;

  // Appel du service et du routeur
  constructor(private collegueServ: DataService, private activatedRoute: ActivatedRoute) {
    this.mat = Number.parseInt(activatedRoute.snapshot.paramMap.get('mat'), 0);
  }

  ngOnInit(): void {
    // Abonnement au changement de route avec réutilisation du composant par le routeur
    this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.mat = Number.parseInt(params.get('matricule'), 0);
      }
    ),
      // Affichage des coordonnées du collègue
      this.collegueInfos = this.collegueServ.recupererCollegueCourant(this.mat.toString()).subscribe(
        col => this.col = col,
        err => console.error(err)
      );
  }

  // Destruction de l'abonnement
  ngOnDestroy(): void {
    this.collegueInfos.unsubscribe();
  }

}
