import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CometChatCallButtonsComponent, CometChatCallLogDetails, CometChatCallLogHistory, CometChatCallLogParticipants, CometChatCallLogRecordings, CometChatCallLogs, CometChatCallLogsWithDetails, CometChatContacts, CometChatConversations, CometChatConversationsWithMessages,  CometChatGroups, CometChatGroupsWithMessages, CometChatIncomingCall, CometChatMessageBubble, CometChatMessageComposer, CometChatMessageHeader, CometChatMessageInformation, CometChatMessageList, CometChatMessages, CometChatUsers, CometChatUsersWithMessages } from '@cometchat/chat-uikit-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallLogModule } from './call-log/call-log.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from './shared/shared.module';
import { MessageComponent } from './message/message.component';
import { FormsModule } from '@angular/forms';
import { ChatsModule } from './chats/chats.module';
import { GroupsModule } from './groups/groups.module';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { MessageModule } from './message/message.module';
import { MessageDemoComponent } from './message/message-demo/message-demo.component';
import { UsersModule } from './users/users.module';
import { Call } from '@angular/compiler';
import { CallModule } from './call/call.module';
import { FormsComponent } from './forms/forms.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MessageDemoComponent,
    FormsComponent
   
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HomeModule
    ,
    AppRoutingModule,
    CallLogModule,FormsModule,
    ChatsModule,GroupsModule,
    CometChatConversationsWithMessages,
    CometChatUsers,CometChatUsersWithMessages,
    CometChatGroupsWithMessages,
    CometChatMessages,
    CometChatMessageList,
    CometChatMessageHeader,
    CometChatMessageComposer,SharedModule,MessageModule,
    UsersModule,ChatsModule,GroupsModule,
    CallLogModule,CallModule,CometChatIncomingCall,
    CometChatContacts,
    CometChatMessageInformation,
    CometChatMessageBubble,
    CometChatCallLogs,
    CometChatCallLogsWithDetails,
    CometChatCallLogDetails,
    CometChatCallLogParticipants,
    CometChatCallLogRecordings,
    CometChatCallLogHistory,
    
    



  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
