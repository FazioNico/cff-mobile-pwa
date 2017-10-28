/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   27-10-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 28-10-2017
*/

import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { TranslateService } from '@ngx-translate/core';
import { loadTranslations } from "./i18n/footer-list.service";

/**
* Generated class for the FooterListComponent component.
*
* See https://angular.io/api/core/Component for more info on Angular
* Components.
*/
@Component({
  selector: 'footer-list',
  templateUrl: 'footer-list.html'
})
export class FooterListComponent {

  public items:any = [];

  constructor(
    private sanitizer: DomSanitizer,
    public translate: TranslateService
  ) {


    let dataLangue = loadTranslations(translate)
    // console.log(dataLangue)
    this.items = [
      {
        title: dataLangue.contact.title,
        html: this.sanitizer.bypassSecurityTrustHtml(dataLangue.contact.data),
        expanded: false
      },
      {
        title: dataLangue.infoTraffic.title,
        html: this.sanitizer.bypassSecurityTrustHtml(dataLangue.infoTraffic.data),
        expanded: false
      },
      {
        title: dataLangue.newsLetter.title,
        html: this.sanitizer.bypassSecurityTrustHtml(dataLangue.newsLetter.data),
        expanded: false
      },
      {
        title: dataLangue.entreprise.title,
        html: this.sanitizer.bypassSecurityTrustHtml(dataLangue.entreprise.data),
        expanded: false
      },
    ];

  }

  expandItem(item:any):void{
    this.items.map((listItem:any) => {
      if(item == listItem){
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }
      return listItem;
    });
  }
}
