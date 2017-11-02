/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   28-10-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 02-11-2017
*/

import { TranslateService } from '@ngx-translate/core';

import { locale as en } from './langues/footer-list.en';
import { locale as fr } from './langues/footer-list.fr';
import { locale as de } from './langues/footer-list.de';
import { locale as it } from './langues/footer-list.it';

export const dataTranslatable = {
  fr: fr,
  en: en,
  de: de,
  it: it
}
export function loadTranslations(translate:TranslateService):any {
  let language = translate.currentLang.substring(0, 2).toLowerCase();
  return returnData(translate, language)
}

export function returnData(translate:TranslateService,language:string){
  // use Array.prototype.some():
  //    doc => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
  let translated = translate.getLangs().some(
    (code:string) => code == language
  ) ? (<any>dataTranslatable)[language] : (<any>dataTranslatable)[translate.getDefaultLang()];
  return translated.data['footer-list'];
}
