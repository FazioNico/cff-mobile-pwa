/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   27-10-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 30-10-2017
*/

import { Pipe, PipeTransform } from '@angular/core';

/**
* Generated class for the ConnectionCatIconPipe pipe.
*
* See https://angular.io/api/core/Pipe for more info on Angular Pipes.
*/
@Pipe({
  name: 'connectionCatIcon',
})
export class ConnectionCatIconPipe implements PipeTransform {
  /**
  * Takes a value and makes it lowercase.
  */
  transform(value: string) {
    //console.log('pipe->', value)
    if(!value){
      return value
    }
    let newValue:string;
    switch (value) {
      case 'RE':
        newValue=  `M3.938 4.13H7.67c1.078 0 1.846.143 2.304.43.822.509 1.233 1.376 1.233 2.598 0 1.525-.63 2.436-1.89 2.733.75.12 1.246.426 1.492.921.125.265.207.554.246.866.039.313.074.994.105 2.046.016.526.047.89.094 1.092s.15.445.311.727h-2.42a1.84 1.84 0 0 1-.214-.715c-.034-.288-.066-.912-.097-1.87-.022-.629-.058-1.066-.11-1.31a1.246 1.246 0 0 0-.296-.602.955.955 0 0 0-.461-.265c-.182-.047-.46-.07-.835-.07h-.905v4.832H3.938V4.129zm2.289 1.686v3.286h.897c.552 0 .947-.088 1.187-.265.395-.292.593-.77.593-1.437 0-.562-.14-.966-.418-1.213s-.732-.371-1.362-.371h-.897zm6.119-1.686h6.378v1.889h-4.09v2.693h3.84v1.858h-3.84v3.083h4.254v1.89h-6.542V4.129z`
        break;
      case 'ICN':
        newValue=  `M6.629 4.19L4.2 15.8h2.429L9.074 4.19H6.63zm12.277 2.312l.582-1.947c-.321-.11-.574-.19-.757-.24a7.84 7.84 0 0 0-.524-.126 10.37 10.37 0 0 0-1.031-.141c-.41-.039-.782-.058-1.115-.058-.987 0-1.888.158-2.703.474-.815.316-1.514.762-2.096 1.339S10.228 7.07 9.906 7.874s-.482 1.694-.482 2.67c0 1.73.493 3.1 1.48 4.11.91.887 2.207 1.33 3.893 1.33.355 0 .746-.028 1.173-.083s.851-.128 1.272-.216l.366-2.23a6.032 6.032 0 0 1-1.206.55c-.36.11-.745.166-1.156.166-.51 0-.973-.089-1.389-.266a2.942 2.942 0 0 1-1.065-.766 3.52 3.52 0 0 1-.682-1.197 4.716 4.716 0 0 1-.24-1.547c0-.677.11-1.295.332-1.855.222-.56.532-1.043.931-1.448.4-.404.874-.718 1.423-.94a4.82 4.82 0 0 1 1.821-.332c.466 0 .888.05 1.265.15.377.1.798.277 1.264.532zm2.429-2.313l-2.496 11.612h2.23l1.863-8.9h.017l2.428 8.9h2.995L30.867 4.19h-2.18l-1.896 8.817h-.033L24.28 4.19h-2.944z`
        break;
      case 'TGV':
        newValue=  `M4.599 4.201h8.954l-.382 1.828H9.898l-2.11 9.768H5.363l2.11-9.768H4.2L4.599 4.2zm18.672 2.46a7.189 7.189 0 0 0-.656-.35 6.865 6.865 0 0 0-.905-.307c-.41-.116-.936-.174-1.578-.174-1.374 0-2.498.454-3.373 1.362-.875.908-1.312 2.065-1.312 3.472 0 1.096.31 1.955.93 2.575.62.62 1.484.93 2.592.93.398 0 .697-.039.897-.116l.648-3.074h-2.459l.382-1.827h4.702l-1.33 6.33c-.221.077-.42.14-.598.19-.177.05-.476.117-.897.2-.42.083-.98.125-1.678.125-1.827 0-3.22-.446-4.178-1.338-.958-.891-1.437-2.179-1.437-3.862 0-2.082.634-3.735 1.903-4.96s2.976-1.835 5.125-1.835c.697 0 1.35.056 1.96.166.609.111 1.224.272 1.844.482l-.582 2.01zm2.21-2.46h2.326l1.08 9.021 4.85-9.02h2.526l-6.48 11.595H27.01L25.481 4.201z`
        break;
      case 'IC':
        newValue=  `M9.249 4.2h4.07L8.284 15.8H4.197zM16 4.2h14.443l-1.496 3.445H18.632l-2.048 4.71h10.32L25.409 15.8H10.965l5.034-11.6z`
        break;
      case 'IR':
        newValue =  `M9.249 4.2h4.07L8.284 15.8H4.197zm16.817 8.166a.93.93 0 0 0 .85-.553L30.218 4.2H16.036L11 15.8h4.052l3.811-8.69h6.014l-1.205 2.775-5.244-.019L22.66 15.8h4.613l-3.134-3.434h1.927z`
        break;
      default :
        newValue =  `M9.249 4.2h4.07L8.284 15.8H4.197zm16.817 8.166a.93.93 0 0 0 .85-.553L30.218 4.2H16.036L11 15.8h4.052l3.811-8.69h6.014l-1.205 2.775-5.244-.019L22.66 15.8h4.613l-3.134-3.434h1.927z`
    }
    return newValue
  }

}
