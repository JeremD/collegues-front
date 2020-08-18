import { ColleguePhoto } from './../domains/collegue.photo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { collegueMock } from '../mock/collegues.mock';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  // Numéro matricule
  mat: number;

  // Photos des collègues
  photosUrl: ColleguePhoto[];

  // Injection du service ActivatedRoute
  constructor(private activatedRoute: ActivatedRoute, private collegueServ: DataService) {
    this.mat = Number.parseInt(activatedRoute.snapshot.paramMap.get('mat'), 0);
  }

  // Abonnement au changement de route avec réutilisation du composant par le routeur
  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe(
    //   (params: ParamMap) => {
    //     this.mat = Number.parseInt(params.get('matricule'), 0);
    //   }
    // );
    this.collegueServ.recupererColleguesPhotos().subscribe(
      photos => this.photosUrl = photos
    );
  }

  // Affichage de tous les collègues
  // select(): void {
  //   this.collegueServ.recupererCollegue().subscribe(
  //     err => console.error(err),
  //     () => { }
  //   );
  // }
}
