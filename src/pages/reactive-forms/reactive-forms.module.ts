import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReactiveFormsPage } from './reactive-forms';

@NgModule({
  declarations: [
    ReactiveFormsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReactiveFormsPage),
  ],
})
export class ReactiveFormsPageModule {}
