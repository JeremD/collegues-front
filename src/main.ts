import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgbdButtonsCheckboxModule } from './app/buttons/buttons-checkbox.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(NgbdButtonsCheckboxModule)
  .catch(err => console.error(err));

