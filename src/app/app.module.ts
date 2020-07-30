import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';

@NgModule({
  // liste des composants
  declarations: [
    AppComponent,
    CollegueComponent
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
