/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   27-10-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 30-10-2017
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
      from: ['Choulex, village', Validators.compose([Validators.required, Validators.minLength(2)])],
      to: ['Lausanne', Validators.compose([Validators.required, Validators.minLength(2)])],
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
    let dFR = new Date(new Date(d).toISOString()).toLocaleString("fr").split('à')[0].replace(/\s/g,'')
    let tFR = new Date(new Date(t).toISOString()).toLocaleString("fr").split('à')[1].replace(/\s/g,'')

    let queryReady = {
      from: (this.form.get('from')||{value:''}).value,
      to: (this.form.get('to')||{value:''}).value,
      date: `${dFR.split('/')[1]}/${dFR.split('/')[0]}/${dFR.split('/')[2]}`,
      time: `${tFR.split(':')[0]}:${tFR.split(':')[1]}`
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
