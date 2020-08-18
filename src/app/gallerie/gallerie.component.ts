import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  // Numéro matricule
  mat: number;

  // Injection du service ActivatedRoute
  constructor(private activatedRoute: ActivatedRoute) {
    this.mat = Number.parseInt(activatedRoute.snapshot.paramMap.get('mat'), 0);
   }

  // Abonnement au changement de route avec réutilisation du composant par le routeur
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.mat = Number.parseInt(params.get('matricule'), 0);
      }
    );
  }
  // ngOnDestroy(): void {
  //   this.activatedRoute.paramMap.unsubscribe();
  // }

}
