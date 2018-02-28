import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AmpInIonicPage } from './amp-in-ionic';

@NgModule({
  declarations: [
    AmpInIonicPage,
  ],
  imports: [
    IonicPageModule.forChild(AmpInIonicPage),
  ],
})
export class AmpInIonicPageModule {}
