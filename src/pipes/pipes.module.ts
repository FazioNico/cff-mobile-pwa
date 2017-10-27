/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   27-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 27-10-2017
 */

import { NgModule } from '@angular/core';
import { MomentPipe } from './moment/moment';
import { ConnectionCatIconPipe } from './connection-cat-icon/connection-cat-icon';
@NgModule({
	declarations: [MomentPipe,
    ConnectionCatIconPipe],
	imports: [],
	exports: [MomentPipe,
    ConnectionCatIconPipe]
})
export class PipesModule {}
