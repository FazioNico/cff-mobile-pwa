/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   27-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 28-10-2017
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { IndexPage } from './index';
import { ComponentsModule } from "../../components/components.module";
import { CffTransportProvider } from "../../providers/cff-transport";
import { IndexI18nModule } from "./i18n";

@NgModule({
  declarations: [
    IndexPage,
  ],
  imports: [
    HttpModule,
    ComponentsModule,
    IndexI18nModule,
    IonicPageModule.forChild(IndexPage),
  ],
  providers: [CffTransportProvider]
})
export class IndexPageModule {}
