import { TemplateDrivenFormsPageActions, TemplateDrivenFormsPageActionTypes } from "./template-driven-forms-page.actions";

export interface TemplateDrivenFormsPageState {
    showLoading: boolean;
}

const initialState: TemplateDrivenFormsPageState = {
    showLoading: false
};

export function reducer(state = initialState, action: TemplateDrivenFormsPageActions): TemplateDrivenFormsPageState {
    switch (action.type) {
        case TemplateDrivenFormsPageActionTypes.SendForm: {
            return {
                ...state,
                showLoading: true
            };
        }

        case TemplateDrivenFormsPageActionTypes.SendFormSuccess: {
            return {
                ...state,
                showLoading: false
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}