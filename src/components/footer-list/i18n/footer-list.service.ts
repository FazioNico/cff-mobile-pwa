/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   28-10-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 28-10-2017
*/

import { TranslateService } from '@ngx-translate/core';

import { locale as en } from './langues/footer-list.en';
import { locale as fr } from './langues/footer-list.fr';

export function loadTranslations(translate:TranslateService):any {
  let dataTranslatable = {
    fr: fr,
    en: en
  }
  let language = translate.currentLang.substring(0, 2).toLowerCase();
  // use Array.prototype.some():
  //    doc => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
  let translated = translate.getLangs().some(
    (code:string) => code == language
  ) ? (<any>dataTranslatable)[language] : (<any>dataTranslatable)[translate.getDefaultLang()];
  return translated.data['footer-list'];
}
