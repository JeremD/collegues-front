import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { DataService } from './services/data.service';
import { environment } from 'src/environments/environment';
import { CreationCollegueComponent } from './creation-collegue/creation-collegue.component';

@NgModule({
  // liste des composants
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    CreationCollegueComponent
  ],
  // dépendances vers les autres modules
  imports: [
    BrowserModule, // module navigateur
    FormsModule, // module forms
    HttpClientModule // module http
  ],
  // liste des services
  providers: [
    DataService
  ],
  // charger à l'initialisation
  bootstrap: [AppComponent]
})
export class AppModule {
  title = 'Collègues Front';
}
