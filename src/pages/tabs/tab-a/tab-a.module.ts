import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabAPage } from './tab-a';

@NgModule({
  declarations: [
    TabAPage,
  ],
  imports: [
    IonicPageModule.forChild(TabAPage),
  ],
})
export class TabAPageModule {}
