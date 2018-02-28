import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmpDetailPage } from './amp-detail';

@NgModule({
  declarations: [
    AmpDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AmpDetailPage),
  ],
})
export class AmpDetailPageModule {}
