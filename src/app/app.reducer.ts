
import { storeFreeze } from 'ngrx-store-freeze';
import { ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from '../environments/environment';

export interface State { }

export const reducers = {};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [logger, storeFreeze]
    : [];