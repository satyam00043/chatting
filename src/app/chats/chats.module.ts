import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChatsComponent } from './chats.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CometChatContacts, CometChatConversations, CometChatConversationsWithMessages } from '@cometchat/chat-uikit-angular';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ChatsComponent,
  
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    CometChatConversations,
    CometChatConversationsWithMessages,
    SharedModule,
    CometChatContacts
  ],exports:[ChatsComponent],
  providers: [],
  bootstrap: [ChatsComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ChatsModule { }
