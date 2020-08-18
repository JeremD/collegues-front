import { ColleguePhoto } from './../domains/collegue.photo';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  // Photos des collègues
  photosUrl: ColleguePhoto[];

  // Numéro matricule
  mat: number;

  // Injection du service ActivatedRoute
  constructor(private collegueServ: DataService) {
  }

  // Récupération photos collègues
  ngOnInit(): void {
    this.collegueServ.recupererColleguesPhotos().subscribe(
      photos => this.photosUrl = photos
    );
  }
}
