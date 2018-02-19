import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var p5: any;

@IonicPage()
@Component({
  selector: 'page-p5-canvas',
  templateUrl: 'p5-canvas.html',
})
export class P5CanvasPage {

  myp5: any;
  penColor: string; // ペンの色
  strokeWidth: number;  // ペンの太さRangeパーツで値が変動する

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad P5CanvasPage');
  }

  ionViewDidEnter() {

    this.penColor = 'red';  // デフォルトは赤
    this.strokeWidth = 10;  // デフォルトの太さを10に設定

    var s = (p) => {

      // キャンバスのセットアップ
      p.setup = function () {
        var cnv = p.createCanvas(document.getElementById('myCanvas').clientWidth, document.getElementById('myCanvas').clientHeight);
        cnv.parent('myCanvas'); // id="myCanvas"と紐づけ
      };

      // タッチイベントを受けて処理が走る。
      p.touchMoved = () => {

        // ペンの太さ
        p.strokeWeight(this.strokeWidth);

        // ペンの色
        p.stroke(this.penColor);

        // なぞったエリアに線を描画
        p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
        return false;
      };
    }

    // インスタンスモード
    this.myp5 = new p5(s);
  }

  // 色を赤に
  onRed() {
    this.penColor = 'red';
  }

  // 色を青に
  onBlue() {
    this.penColor = 'blue';
  }

  // 色を黄色に
  onYellow() {
    this.penColor = 'yellow';
  }

  onHome() {
    this.navCtrl.setRoot('HomePage');
  }

}
