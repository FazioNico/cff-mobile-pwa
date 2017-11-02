/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   27-10-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 02-11-2017
*/

import { Component, Inject } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from "rxjs/Observable";

import { CffTransportProvider } from "../../providers/cff-transport";

/**
* Generated class for the IndexPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage({
  name: 'IndexPage',
  segment: 'index'
})
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  private form:FormGroup;
  private cityList:Observable<any>|null;
  private dropDownActive:any;

  constructor(
    public navCtrl: NavController,
    @Inject(FormBuilder) fb: FormBuilder,
    private _api:CffTransportProvider
  ) {
    this.form = fb.group({
      from: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      to: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      date: [new Date(Date.now()).toISOString()],
      time: [new Date(Date.now()).toISOString()],
    });
  }

  search():void{
    if(!this.form.valid){
      return
    }

    let d =  (this.form.get('date')||{value:new Date(Date.now())}).value
    let t =  (this.form.get('time')||{value:new Date(Date.now())}).value;

    let dP = `${(new Date(d.toString()).getMonth())+1}/${new Date(d.toString()).getDate()}/${new Date(d.toString()).getFullYear()}`
    let tP = `${(new Date(t.toString()).getUTCHours())}:${new Date(t.toString()).getMinutes()}`

    let queryReady = {
      from: (this.form.get('from')||{value:''}).value,
      to: (this.form.get('to')||{value:''}).value,
      date: dP,
      time: tP
    }

    this.navCtrl.push('ResultsPage', {search:queryReady})
  }

  autoComplet($event:any, inputName:string):void{
    this.dropDownActive = inputName
    if($event.target.value.length<=2){
      this.cityList = null;
      return
    }
    this.cityList = this._api.autoComplete($event.target.value)
  }

  selectCity(city:string, inputName:string){
    this.form.patchValue({[inputName]:city})
    this.cityList = null;
  }
}
