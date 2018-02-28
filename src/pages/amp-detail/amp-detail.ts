import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

interface EnableAMPWindow extends Window {
  AMP: any;
}
declare var window: EnableAMPWindow;

/**
 * Generated class for the AmpDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-amp-detail',
  templateUrl: 'amp-detail.html',
})
export class AmpDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    const url = this.navParams.data.url;

    console.log(url);

    // AMPが使用可能かチェックする
    (window.AMP = window.AMP || []).push((AMP: any) => {
      const container = document.getElementById('container');
      this.getAmpArticlePage(url).then(doc => {
        console.log(doc);
        AMP.attachShadowDoc(container, doc, url);
      });
    });
  }

  onHome() {
    this.navCtrl.setRoot('HomePage');
  }


  getAmpArticlePage(url: string): Promise<Document> {

    const xhr = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
      xhr.open('GET', url, true);
      xhr.responseType = 'document';
      xhr.setRequestHeader('Accept', 'text/html');
      xhr.onload = () => {
        const isAMP = xhr.responseXML.documentElement.hasAttribute('amp') || xhr.responseXML.documentElement.hasAttribute('⚡');
        return isAMP ? resolve(xhr.responseXML) : reject('Article does not have an AMP version.');
      };
      xhr.send();
    });
  }

}
