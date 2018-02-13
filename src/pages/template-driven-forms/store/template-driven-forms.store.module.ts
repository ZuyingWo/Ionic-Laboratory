import { NgModule, ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from '.';
import { EffectsModule } from '@ngrx/effects';
import { TemplateDrivenFormsPageEffects } from './page/template-driven-forms-page.effects';


@NgModule({
  declarations: [
  ],
  imports: [
  ],
})
export class TemplateDrivenFormsStoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootTemplateDrivenFormsStoreModule,
      providers: []
    }
  }
}


@NgModule({
  imports: [
    StoreModule.forFeature('templateDrivenForms', reducers),
    EffectsModule.forFeature([TemplateDrivenFormsPageEffects])
  ]
})
export class RootTemplateDrivenFormsStoreModule {}
