/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   21-10-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 02-11-2017
*/

import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { IndexI18nService } from "./index-i18n.service";
import { locale as english } from './langues/index.en';
import { locale as french } from './langues/index.fr';
import { locale as german } from './langues/index.de';
import { locale as italian } from './langues/index.it';

@NgModule({
  imports: [
    TranslateModule.forChild()
  ],
  providers: [IndexI18nService],
  exports: [TranslateModule] // do not forguet to export TranslateModule !!
})
export class IndexI18nModule {
  constructor(
    private translationLoader: IndexI18nService
  ){
      this.translationLoader.loadTranslations(english, french, german, italian);
  }
}
