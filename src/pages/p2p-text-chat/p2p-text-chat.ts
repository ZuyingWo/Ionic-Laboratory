import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


class Talk {
  constructor(
    public srcId: string,
    public destId: string,
    public message: string
  ) {}
}

@IonicPage()
@Component({
  selector: 'page-p2p-text-chat',
  templateUrl: 'p2p-text-chat.html',
})
export class P2pTextChatPage {

  talk: Talk = new Talk('', '', '');
  talkHistory: Talk[] = [];

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

    this.peer.on('connection', conn => this.receive(conn));
  }

  private receive(conn: PeerJs.DataConnection) {
    conn.on('open', () => {
      conn.on('data', data => this.showMessage(data));
    });
  }

  showMessage(talk: Talk) {
    this.talkHistory.push(talk);
  }

  onSend() {
    const conn = this.peer.connect(this.talk.destId, { serialization: 'json' });

    conn.on('open', () => {
      conn.send(this.talk);
      this.showMessage(this.talk);
    });
  }
}
