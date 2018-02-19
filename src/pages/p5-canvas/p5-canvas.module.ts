import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { P5CanvasPage } from './p5-canvas';

@NgModule({
  declarations: [
    P5CanvasPage,
  ],
  imports: [
    IonicPageModule.forChild(P5CanvasPage),
  ],
})
export class P5CanvasPageModule {}
