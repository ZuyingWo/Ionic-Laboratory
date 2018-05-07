import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Toolbar } from 'ionic-angular';

/**
 * Generated class for the TabAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-a',
  templateUrl: 'tab-a.html',
})
export class TabAPage {

  @ViewChild('test') test: any;
  @ViewChild('toolbar') toolbar: Toolbar;

  segments = ['Angular', 'Ionic', 'Cordova', 'Capacitor'];
  currentSegment: string = this.segments[0];
  array = Array.from(Array(5).keys());

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter() {

  }

}
