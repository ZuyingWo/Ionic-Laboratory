import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmployeeModel } from './models/employee.model';

@IonicPage()
@Component({
  selector: 'page-template-driven-forms',
  templateUrl: 'template-driven-forms.html',
})
export class TemplateDrivenFormsPage {

  public departments: string[] = [
    'Desiner', 'Develop', 'Marketing'
  ];

  public model: EmployeeModel = new EmployeeModel(12, 'Ionic', '060-1234-5678', this.departments[1]);

  public submitted = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemplateDrivenFormsPage');
  }

  onSubmit() {
    this.submitted = true;
    console.log('submitted');
  }

}
