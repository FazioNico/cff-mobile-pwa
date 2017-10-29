/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   29-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 29-10-2017
 */

import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ConnectionTypeIconPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'connectionTypeIcon',
})
export class ConnectionTypeIconPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    // console.log('pipe->',value)
    let newValue:string;
    switch (true) {
      case value.includes('bus'):
        newValue=  `M4.2 9c0 .2.1.3.3.3h3.8c.2 0 .3-.1.3-.3V5.3c0-.2-.1-.3-.3-.3H4.6c-.2 0-.4.1-.4.3V9zm5.1 1.2c0 .3.2.5.5.5s.5-.2.5-.5V5.4c0-.3-.2-.5-.5-.5s-.5.2-.5.5v4.8zm1.6 0c0 .3.2.5.5.5s.5-.2.5-.5V5.4c0-.3-.2-.5-.5-.5s-.5.2-.5.5v4.8zm1.6.1c0 .2.1.3.3.3h1.7c.2 0 .3-.1.3-.3v-.1l-1.3-4.9c0-.2-.2-.4-.5-.4s-.5.2-.5.5v4.9zM3.3 5H.5v-.7h12.6c.5 0 1 .3 1.1.8l1.3 5v3.5c0 .3-.2.5-.5.5H9.2c-.3 0-.5-.2-.5-.5v-.1c0-1.6-1.3-2.9-2.9-2.9-1.6 0-2.9 1.3-2.9 2.9v.1c0 .3-.2.5-.5.5H.5V9.4h2.8c.2 0 .3-.1.3-.3V5.3c0-.2-.1-.3-.3-.3z`
        break;
      case value.includes('walk'):
        newValue=  `M16.881 11.1l-2.2-1-1.399-2.9c0-.1-.101-.2-.101-.3v-.1c-.1-.2-.199-.3-.399-.4l-.6-.3h-.399c-.1 0-.2 0-.4.1s-.4.1-.5.3l-3.5 1.8c-.1 0-.1.1-.2.1-.1.1-.2.3-.3.4l-.5 2.7c0 .4.2.7.5.8.3.1.7-.2.7-.5l.5-2.6 1.8-.9-.8 3.5v.3l-.5 3.701v.1l-2.4 3.6c-.3.4-.2 1 .1 1.199.3.201.9 0 1.2-.398l2.4-3.602c.1-.1.1-.199.2-.398 0-.102.1-.102.1-.201l.4-2.699h.2c.2 0 .3.1.5.199l2.5 2.9.8 3.6c.1.5.5.701.9.701.399-.102.699-.5.6-1l-.8-3.602c0-.1-.101-.299-.2-.398l-.1-.102-2.6-3 .7-3.099.6 1.2s0 .1.101.1c0 .2.2.3.3.4l2.4 1c.3.1.699 0 .8-.3-.003-.401-.103-.801-.403-.901zm-4.3-8.1c.9 0 1.6.7 1.6 1.5s-.699 1.6-1.6 1.6c-.899 0-1.6-.7-1.6-1.5s.801-1.6 1.6-1.6z`
        break;
      default : // train
        newValue =  `M15.3 13.7c.2 0 .3-.1.3-.3l-.3-1.9h-3.2v2.2h3.2zM8.6 4.2L10.3 3 8 1.7 5.7 3l1.8 1.2h1.1zm3.3 3.3c0 .2.1.3.3.3h1.6c.2 0 .3-.1.3-.3l-.3-2.4c0-.2-.2-.3-.3-.3h-1.3c-.2 0-.3.1-.3.3v2.4zM7.7 4.8H.5v-.6h5.9L4.5 3 8 1l3.5 2-1.9 1.2h3.8c.5 0 .9.3.9.8l.8 5.9H.5V7.8h7.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H.5v-.6h7.2c.2 0 .3-.1.3-.3S7.9 6 7.7 6H.5v-.6h7.2c.2 0 .3-.1.3-.3 0-.1-.1-.3-.3-.3zM4.5 13c0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6-.7 1.6-1.6 1.6c-.9 0-1.6-.7-1.6-1.6m3.7 0c0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6-.7 1.6-1.6 1.6-1.6-.7-1.6-1.6M.5.8h15V.5H.5v.3zm0 14.7h15v-.6H.5v.6zm0-3.9l3.4-.1v2.2H.5v-2.1z`
    }
    return newValue
  }
}
