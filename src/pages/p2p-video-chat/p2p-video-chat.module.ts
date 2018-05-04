import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { P2pVideoChatPage } from './p2p-video-chat';

@NgModule({
  declarations: [
    P2pVideoChatPage,
  ],
  imports: [
    IonicPageModule.forChild(P2pVideoChatPage),
  ],
})
export class P2pVideoChatPageModule {}
