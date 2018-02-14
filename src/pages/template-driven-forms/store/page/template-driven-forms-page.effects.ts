import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { TemplateDrivenFormsPageActionTypes, SendFormSuccess } from "./template-driven-forms-page.actions";
import { Observable } from 'rxjs/Observable';
import { tap, map } from 'rxjs/operators';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/of';
import { Store } from "@ngrx/store";
import { State } from "../../../../app/app.reducer";


@Injectable()
export class TemplateDrivenFormsPageEffects {
    constructor(private actions$: Actions, private store: Store<State>) {}

    sendForm$ = this.actions$.ofType(TemplateDrivenFormsPageActionTypes.SendForm).subscribe(() => {
        Observable.interval(3000).take(1).subscribe(() => this.store.dispatch(new SendFormSuccess()));
    })
}