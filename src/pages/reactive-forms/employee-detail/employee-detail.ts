import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder } from '@angular/forms/src/form_builder';
import { Validators } from '@angular/forms/src/validators';

/**
 * Generated class for the EmployeeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employee-detail',
  templateUrl: 'employee-detail.html',
})
export class EmployeeDetailPage {

  employeeForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.createForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeDetailPage');
  }

  createForm() {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

}
