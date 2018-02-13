import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TemplateDrivenFormsPage } from './template-driven-forms';

@NgModule({
  declarations: [
    TemplateDrivenFormsPage,
  ],
  imports: [
    IonicPageModule.forChild(TemplateDrivenFormsPage)
  ],
})
export class TemplateDrivenFormsPageModule {}
