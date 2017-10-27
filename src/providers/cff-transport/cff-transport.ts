/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   27-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 28-10-2017
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

/*
  Generated class for the CffTransportProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CffTransportProvider {
  private url:any;

  constructor(public http: Http) {
    this.url = {
      transport: 'https://transport.opendata.ch/v1/connections',
      transportBeta: 'https://transport-beta.opendata.ch/v1/connections',
      search: 'https://timetable.search.ch/api/route.fr.json',
      complete: 'https://timetable.search.ch/api/completion.fr.json'
    }
  }

  fromTo(data:{from:string,to:string,limit?:string}):Observable<any>{
    return this.http.get(`${this.url.search}?from=${data.from}&to=${data.to}&limit=${data.limit||'1'}`)
                    .map(res => res.json())
  }

  autoComplete(query:string):Observable<any>{
    return this.http.get(`${this.url.complete}?term=${query}`)
                    .map(res => res.json())
  }
}
