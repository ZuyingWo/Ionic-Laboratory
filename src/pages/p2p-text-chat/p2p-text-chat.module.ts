import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { P2pTextChatPage } from './p2p-text-chat';

@NgModule({
  declarations: [
    P2pTextChatPage,
  ],
  imports: [
    IonicPageModule.forChild(P2pTextChatPage),
  ],
})
export class P2pTextChatPageModule {}
