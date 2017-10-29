/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   29-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 29-10-2017
 */

import { Component } from '@angular/core';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { availableLanguages, sysOptions } from "../../i18n";

/**
* Generated class for the TranslateSwitchComponent component.
*
* See https://angular.io/api/core/Component for more info on Angular
* Components.
*/
@Component({
  selector: 'translate-switch',
  templateUrl: 'translate-switch.html'
})
export class TranslateSwitchComponent {

  public languages:any[] = availableLanguages;
  public currentLang:string = sysOptions.systemLanguage;

  constructor(
    public translate: TranslateService
  ) {
    this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
      this.currentLang = event.lang
    });
  }

  applyLanguage(code:string) {
		this.translate.use(code);
	}
}
