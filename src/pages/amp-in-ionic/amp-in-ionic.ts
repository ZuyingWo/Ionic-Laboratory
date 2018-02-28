import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AmpInIonicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-amp-in-ionic',
  templateUrl: 'amp-in-ionic.html',
})
export class AmpInIonicPage {

  articles = {
    'sample-0': 'https://yosshitaku067.github.io/UI-Testing-Ionic-Laboratory/blog-0.amp.html',
    'sample-1': 'https://yosshitaku067.github.io/UI-Testing-Ionic-Laboratory/blog-1.amp.html',
    'sample-2': 'https://yosshitaku067.github.io/UI-Testing-Ionic-Laboratory/blog-2.amp.html'
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmpInIonicPage');
  }

  detail(key: string) {
    this.navCtrl.push('AmpDetailPage', {
      url: this.articles[key]
    });
  }

  onHome() {
    this.navCtrl.setRoot('HomePage');
  }

}
