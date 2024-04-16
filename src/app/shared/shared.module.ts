import { CometChatConversations, CometChatConversationsWithMessages, CometChatDetails, CometChatGroups, CometChatGroupsWithMessages, CometChatMessageComposer, CometChatMessageHeader, CometChatMessageList, CometChatMessages, CometChatUsers, CometChatUsersWithMessages } from '@cometchat/chat-uikit-angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { AudioBubbleComponent } from './audio-bubble/audio-bubble.component';
import { AvatarDemoComponent } from './avatar-demo/avatar-demo.component';
import { BadgeComponent } from './badge/badge.component';
import { CardBubbleComponent } from './card-bubble/card-bubble.component';
import { DetailsComponent } from './details/details.component';
import { FileBubbleComponent } from './file-bubble/file-bubble.component';
import { FormBubbleComponent } from './form-bubble/form-bubble.component';
import { ImageBubbleComponent } from './image-bubble/image-bubble.component';
import { ListItemComponent } from './list-item/list-item.component';
import { LocalizeComponent } from './localize/localize.component';
import { MessageReciptComponent } from './message-recipt/message-recipt.component';
import { SchedularBubbleComponent } from './schedular-bubble/schedular-bubble.component';
import { SoundManagerComponent } from './sound-manager/sound-manager.component';
import { StatusIndicatorComponent } from './status-indicator/status-indicator.component';
import { TextBubbleComponent } from './text-bubble/text-bubble.component';
import { VideoBubbleComponent } from './video-bubble/video-bubble.component';
import { ThemeComponent } from './theme/theme.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    SharedComponent,
    AudioBubbleComponent,
    AvatarDemoComponent,
    BadgeComponent,
    CardBubbleComponent,
    DetailsComponent,
    FileBubbleComponent,
    FormBubbleComponent,
    ImageBubbleComponent,
    ListItemComponent,
    LocalizeComponent,
    MessageReciptComponent,
    SchedularBubbleComponent,
    SoundManagerComponent,
    StatusIndicatorComponent,
    TextBubbleComponent,
    VideoBubbleComponent,
    ThemeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,BrowserAnimationsModule,RouterModule,
    FormsModule,
    CometChatConversationsWithMessages,
    CometChatConversations,
    CometChatUsersWithMessages,
    CometChatUsers,
    CometChatGroups,
    CometChatGroupsWithMessages,
    CometChatMessages,
    CometChatMessageList,
    CometChatMessageHeader,
    CometChatMessageComposer,
    CometChatDetails,

    
  ],
  exports:[
    SharedComponent
  ],
  providers: [],
  bootstrap: [SharedComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SharedModule { }
