import { AccueilComponent } from './accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { DataService } from './services/data.service';
import { environment } from 'src/environments/environment';
import { CreationCollegueComponent } from './creation-collegue/creation-collegue.component';
import { MenuComponent } from './menu/menu.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { RouterModule } from '@angular/router';

@NgModule({
  // liste des composants
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    CreationCollegueComponent,
    MenuComponent,
    AccueilComponent,
    GallerieComponent,
    AProposComponent
  ],
  // dépendances vers les autres modules
  imports: [
    BrowserModule, // module navigateur
    FormsModule, // module forms
    HttpClientModule, // module http
    RouterModule.forRoot(ROUTES) // module router
  ],
  // liste des services
  providers: [
    DataService
  ],
  // charger à l'initialisation
  bootstrap: [AppComponent]
})
export class AppModule {
  title = 'Administration Collègues';
}
