/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   27-10-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 29-10-2017
*/

import { Component, Input, OnInit } from '@angular/core';

/**
* Generated class for the ConnectionComponent component.
*
* See https://angular.io/api/core/Component for more info on Angular
* Components.
*/
@Component({
  selector: 'connection',
  templateUrl: 'connection.html'
})
export class ConnectionComponent implements OnInit {

  @Input('connection') public readonly connection:any;

  ngOnInit(){
    // console.log(this.connection)
    // this.connection.legs.map(
    //   (leg:any)=> {
    //     //console.log('test->',leg[Object.keys(leg)[0]])
    //   }
    // )

  }
}
