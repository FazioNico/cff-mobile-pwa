/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   27-10-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 27-10-2017
*/

import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { datasHtml } from "./footer-list.datas";

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
    private sanitizer: DomSanitizer
  ) {
    this.items = [
      {
        title: 'Contact',
        html: this.sanitizer.bypassSecurityTrustHtml(datasHtml.contact),
        expanded: false
      },
      {
        title: 'Informations sur le trafic ferroviaire',
        html: this.sanitizer.bypassSecurityTrustHtml(datasHtml.infoTraffic),
        expanded: false
      },
      {
        title: 'Newsletter et médias sociaux',
        html: this.sanitizer.bypassSecurityTrustHtml(datasHtml.newsLetter),
        expanded: false
      },
      {
        title: 'Entreprise',
        html: this.sanitizer.bypassSecurityTrustHtml(datasHtml.entreprise),
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
