/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   27-10-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 27-10-2017
 */

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { ResultsPage } from './results';
import { CffTransportProvider } from "../../providers/cff-transport";
import { ComponentsModule } from "../../components/components.module";
import { PipesModule } from "../../pipes/pipes.module";
import { ResultsI18nModule } from "./i18n";

@NgModule({
  declarations: [
    ResultsPage,
  ],
  imports: [
    HttpModule,
    PipesModule,
    ComponentsModule,
    ResultsI18nModule,
    IonicPageModule.forChild(ResultsPage),
  ],
  providers: [CffTransportProvider]
})
export class ResultsPageModule {}
