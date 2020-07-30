import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';

@NgModule({
  // liste des composants
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent
  ],
  // dépendances vers les autres modules
  imports: [
    BrowserModule
  ],
  // liste des services
  providers: [],
  // charger à l'initialisation
  bootstrap: [AppComponent]
})
export class AppModule {

}
