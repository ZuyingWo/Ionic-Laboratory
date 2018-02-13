import * as fromTemplateDrivenFormsPage from './page/template-driven-forms-page.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../../app/app.reducer';

export interface TemplateDrivenFormsState {
    page: fromTemplateDrivenFormsPage.TemplateDrivenFormsPageState;
}

export interface State extends fromRoot.State {
    templateDrivenForms: TemplateDrivenFormsState
}

export const reducers = {
    page: fromTemplateDrivenFormsPage.reducer
};

export const selectTemplateDrivenFormsState = createFeatureSelector<TemplateDrivenFormsState>('templateDrivenForms');
export const getShowLoading = createSelector(selectTemplateDrivenFormsState, (state: TemplateDrivenFormsState) => state.page.showLoading);