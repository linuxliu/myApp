import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { RecommPage } from './recomm';

@NgModule({
  declarations: [
    RecommPage,
  ],
  imports: [
    IonicPageModule.forChild(RecommPage),
  ],
})
export class RecommPageModule {}
