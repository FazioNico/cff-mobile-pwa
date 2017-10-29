/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   27-10-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 29-10-2017
*/

import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { loadTranslations, returnData } from "./i18n/footer-list.service";

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
  public dataLangue:any;

  constructor(
    private sanitizer: DomSanitizer,
    public translate: TranslateService
  ) {

    this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
      //console.log('langue change..', event.lang)
      this.dataLangue = returnData(this.translate, event.lang)
      this.items = this.assignItems()
    });
    this.dataLangue = loadTranslations(this.translate)
    // console.log(dataLangue)
    this.items = this.assignItems()
  }

  assignItems(){
    return this.items = [
      {
        title: this.dataLangue.contact.title,
        html: this.sanitizer.bypassSecurityTrustHtml(this.dataLangue.contact.data),
        expanded: false
      },
      {
        title: this.dataLangue.infoTraffic.title,
        html: this.sanitizer.bypassSecurityTrustHtml(this.dataLangue.infoTraffic.data),
        expanded: false
      },
      {
        title: this.dataLangue.newsLetter.title,
        html: this.sanitizer.bypassSecurityTrustHtml(this.dataLangue.newsLetter.data),
        expanded: false
      },
      {
        title: this.dataLangue.entreprise.title,
        html: this.sanitizer.bypassSecurityTrustHtml(this.dataLangue.entreprise.data),
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
