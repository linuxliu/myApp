import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegCompletePage } from './reg-complete';

@NgModule({
  declarations: [
    RegCompletePage,
  ],
  imports: [
    IonicPageModule.forChild(RegCompletePage),
  ],
})
export class RegCompletePageModule {}
