/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   21-10-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 02-11-2017
*/

import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { ResultsI18nService } from "./results-i18n.service";
import { locale as english } from './langues/results.en';
import { locale as french } from './langues/results.fr';
import { locale as german } from './langues/results.de';
import { locale as italian } from './langues/results.it';

@NgModule({
  imports: [
    TranslateModule.forChild()
  ],
  providers: [ResultsI18nService],
  exports: [TranslateModule] // do not forguet to export TranslateModule !!
})
export class ResultsI18nModule {
  constructor(
    private translationLoader: ResultsI18nService
  ){
      this.translationLoader.loadTranslations(english, french, german, italian);
  }
}
