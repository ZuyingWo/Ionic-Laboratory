import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

class Talk {
  constructor(
    public srcId: string,
    public destId: string,
    public device: {
      video: boolean,
      audio: boolean
    }
  ) {}
}

@IonicPage()
@Component({
  selector: 'page-p2p-video-chat',
  templateUrl: 'p2p-video-chat.html',
})
export class P2pVideoChatPage {

  @ViewChild('video') video: any;
  @ViewChild('selfVideo') selfVideo: any;

  talk: Talk = new Talk('', '', { video: true, audio: false });

  private peer: PeerJs.Peer;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.start();
  }

  public start() {
    const peerId = String(Math.floor(Math.random() * 900) + 100);
    const options = {
      host: location.hostname,
      port: 9000
    };

    this.peer = new Peer(peerId, options);

    this.peer.on('open', id => this.talk.srcId = id);

    this.peer.on('call', (call) => { this.receive(call); });
  }

  private receive(call: PeerJs.MediaConnection) {
    navigator.getUserMedia =  ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia );
    navigator.getUserMedia(this.talk.device, mediaStream => {
      this.showVideoSelf(mediaStream);
      call.answer(mediaStream);
      call.on('stream', stream => this.showVideo(stream));
    }, err => console.error(err));
  }

  public call() {
    navigator.getUserMedia =  ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia );
    navigator.getUserMedia(this.talk.device, mediaStream => {
      this.showVideoSelf(mediaStream);
      const call = this.peer.call(this.talk.destId, mediaStream);
      call.on('stream', stream => this.showVideo(stream));
    }, err => console.error(err));
  }

  private showVideo(stream) {
    let video = this.video.nativeElement;
    video.src = URL.createObjectURL(stream);
  }

  private showVideoSelf(stream) {
    console.log('called')
    let video = this.selfVideo.nativeElement;
    video.src = URL.createObjectURL(stream);
  }

  onSend() {
    this.call();
  }

}
