/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   02-11-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 02-11-2017
 */

import { Component } from '@angular/core';

/**
 * Generated class for the FooterAuthorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'footer-author',
  templateUrl: 'footer-author.html'
})
export class FooterAuthorComponent {

  openPage(url:string){
    // only work with web
    let win = window.open(url, '_blank')
    win.focus()
  }
}
