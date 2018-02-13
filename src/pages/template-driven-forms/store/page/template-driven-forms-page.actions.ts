import { Action } from '@ngrx/store';

export enum TemplateDrivenFormsPageActionTypes {
    SendForm = '[TemplateDrivenFormsPage] Form 送信',
    SendFormSuccess = '[TemplateDrivenFormsPage] Form 送信 成功',
};

export class SendForm implements Action {
    readonly type = TemplateDrivenFormsPageActionTypes.SendForm;
    constructor() {}
}

export class SendFormSuccess implements Action {
    readonly type = TemplateDrivenFormsPageActionTypes.SendFormSuccess;
    constructor() {}
}

export type TemplateDrivenFormsPageActions = SendForm | SendFormSuccess;
