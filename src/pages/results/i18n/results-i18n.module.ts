/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   21-10-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 27-10-2017
*/

import { NgModule } from '@angular/core';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ResultsI18nService } from "./results-i18n.service";
import { locale as english } from './langues/results.en';
import { locale as french } from './langues/results.fr';

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
      this.translationLoader.loadTranslations(english, french);
  }
}
