import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reactive-forms',
  templateUrl: 'reactive-forms.html',
})
export class ReactiveFormsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReactiveFormsPage');
  }

  onHome() {
    this.navCtrl.setRoot('HomePage');
  }

}
