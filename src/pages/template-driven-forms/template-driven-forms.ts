import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { EmployeeModel } from './models/employee.model';
import { Store } from '@ngrx/store';
import { State } from '../../app/app.reducer';
import { SendForm } from './store/page/template-driven-forms-page.actions';
import { Observable } from 'rxjs/Observable';
import { getShowLoading } from './store';

@IonicPage()
@Component({
  selector: 'page-template-driven-forms',
  templateUrl: 'template-driven-forms.html',
})
export class TemplateDrivenFormsPage {

  public departments: string[] = [
    'Desiner', 'Develop', 'Marketing'
  ];

  public model: EmployeeModel = new EmployeeModel(12, 'Ionic', '090-1234-5678', this.departments[1]);

  public submitted = false;

  showLoading$: Observable<boolean>;

  constructor(private store: Store<State>, public navCtrl: NavController) {
    this.showLoading$ = this.store.select(getShowLoading);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemplateDrivenFormsPage');
  }

  onSubmit() {
    this.submitted = true;
    this.store.dispatch(new SendForm());
  }

  onHome() {
    this.navCtrl.setRoot('HomePage');
  }

}
