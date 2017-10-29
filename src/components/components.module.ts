/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   27-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 27-10-2017
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';

import { PipesModule } from "../pipes/pipes.module";

import { LogoSvgComponent } from './logo-svg/logo-svg';
import { ConnectionComponent } from './connection/connection';
import { ExpandableComponent } from './expandable/expandable';
import { FooterListComponent } from './footer-list/footer-list';
import { TranslateSwitchComponent } from './translate-switch/translate-switch';
@NgModule({
	declarations: [LogoSvgComponent,
    ConnectionComponent,
    ExpandableComponent,
    FooterListComponent,
    TranslateSwitchComponent
	],
	imports: [
		CommonModule,
		IonicPageModule,
		PipesModule
	],
	exports: [
		LogoSvgComponent,
    ConnectionComponent,
    ExpandableComponent,
    FooterListComponent,
    TranslateSwitchComponent
	]
})
export class ComponentsModule {}
