/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   27-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 30-10-2017
 */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs/Observable";

import { CffTransportProvider} from "../../providers/cff-transport";


/**
* Generated class for the ResultsPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage({
  name:'ResultsPage',
  segment:'results',
  defaultHistory: ['IndexPage']
})
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  public readonly search:{from:string,to:string,limit?:string,date:string,time:string}
  public results:Observable<any>

  constructor(
    public readonly navCtrl: NavController,
    public readonly navParams: NavParams,
    private readonly _api: CffTransportProvider
  ) {
    if(!this.navParams.get('search')){
      window.location.href = './'
      return
    }
    this.search = this.navParams.get('search')
    console.log(this.search)
    this.results = this._api.fromTo(this.search)
                            .map(
                              (res:any) => {
                                res.connections = res.connections.map(
                                  (conn:any) => Object.assign({}, conn, {expanded:false})
                                )
                                return res
                              }
                            )
  }

  displayDetails(connection:any):void{
    connection.expanded = !connection.expanded
  }

  // no api to buy ticket or get ticket price ... waiting for ;-)
  buyTicket($event:Event, connection:any):void{
    $event.preventDefault()
    $event.stopPropagation()
    console.log('buy ticket->', connection)
  }

}
