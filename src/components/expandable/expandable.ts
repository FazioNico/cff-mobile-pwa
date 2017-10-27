/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   27-10-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 27-10-2017
*/

import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';

/**
* Generated class for the ExpandableComponent component.
*
* See https://angular.io/api/core/Component for more info on Angular
* Components.
*/
@Component({
  selector: 'expandable',
  templateUrl: 'expandable.html'
})
export class ExpandableComponent {

  @ViewChild('expandWrapper', {read: ElementRef}) expandWrapper:ElementRef;
  @Input('expanded') expanded:boolean;
  @Input('expandHeight') expandHeight:number;
  @Input('datas') datas:{
    stops?:any[],
    from?:{
      time:any,
      name:string
    },
    to?:{
      time:any,
      name:string
    }
    html?:boolean
  };

  constructor(
    public renderer: Renderer
  ) {

  }

  ngAfterViewInit(){
    //this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', (((this.expandHeight<=0)?1:this.expandHeight)*(20)||80) + 'px');
    this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'max-height', '800' + 'px');
  }
}
