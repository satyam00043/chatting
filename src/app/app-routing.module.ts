import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ChatsComponent } from './chats/chats.component';
import { GroupsComponent } from './groups/groups.component';
import { SharedComponent } from './shared/shared.component';
import { UsersComponent } from './users/users.component';
import { MessageComponent } from './message/message.component';
import { Call } from '@angular/compiler';
import { CallLogComponent } from './call-log/call-log.component';
import { CallComponent } from './call/call.component';
import { CallLogsDemoComponent } from './call-log/call-logs-demo/call-logs-demo.component';
import { CallLogsParticipantsComponent } from './call-log/call-logs-participants/call-logs-participants.component';
import { GroupsDemoComponent } from './groups/groups-demo/groups-demo.component';
import { CallButtonsComponent } from './call/call-buttons/call-buttons.component';
import { DetailsComponent } from './shared/details/details.component';
import { BannedMemberComponent } from './groups/banned-member/banned-member.component';
import { TransferOwnershipComponent } from './groups/transfer-ownership/transfer-ownership.component';
import { AddMemberComponent } from './groups/add-member/add-member.component';
import { JoinGroupComponent } from './groups/join-group/join-group.component';
import { CreateGroupComponent } from './groups/create-group/create-group.component';
import { MessageComposerComponent } from './message/message-composer/message-composer.component';
import { MessageHeaderComponent } from './message/message-header/message-header.component';
import { MessageListComponent } from './message/message-list/message-list.component';
import { GroupsWithMessageComponent } from './groups/groups-with-message/groups-with-message.component';
import { CallLogsHistoryComponent } from './call-log/call-logs-history/call-logs-history.component';

const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
  },
  {path:'signup',component:LoginComponent},
  {
    path: 'signup',
    component: SignupComponent,
  },{
    path: 'home',
    component: HomeComponent,
    children:[
      {
        path: '',
        component: ChatsComponent,
      },
      {
        path: 'shared-module',
        component: SharedComponent,
      },
      {
        path: 'users-module',
        component: UsersComponent,
      },
      {
        path: 'groups-module',
        component: GroupsComponent,
      },
      {
        path: 'chats-module',
        component: ChatsComponent,
      },
      {
        path: 'messages-module',
        component: MessageComponent,
      },
      {
        path: 'calls-module',
        component: CallComponent,
      },
      {
        path: 'call-logs-module',
        component: CallLogComponent,
      },
    ]
  },
  {
    path: 'groups-with-messages',
    component: GroupsWithMessageComponent,
  },
  {
    path: 'groups',
    component: GroupsDemoComponent,
  },
  {
    path: 'messages',
    component: MessageComponent,
  },
  {
    path: 'message-list',
    component: MessageListComponent,
  },
  {
    path: 'message-header',
    component: MessageHeaderComponent,
  },
  {
    path: 'message-composer',
    component: MessageComposerComponent,
  },
  {
    path: 'create-group',
    component: CreateGroupComponent,
  },
  {
    path: 'join-group',
    component: JoinGroupComponent,
  },
  {
    path: 'group-members',
    component: GroupsComponent,
  },
  {
    path: 'add-member',
    component: AddMemberComponent,
  },
  {
    path: 'transfer-ownership',
    component: TransferOwnershipComponent,
  },
  {
    path: 'banned-members',
    component: BannedMemberComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: 'call-buttons',
    component: CallButtonsComponent,
  },
  {
    path: 'call-logs',
    component: CallLogsDemoComponent,
  },
  {
    path: 'call-logs-with-details',
    component: CallLogsDemoComponent,
  },
  {
    path: 'call-log-details',
    component: CallLogComponent,
  },
  {
    path: 'call-log-participants',
    component: CallLogsParticipantsComponent,
  },
  {
    path: 'call-log-recordings',
    component: CallLogsDemoComponent,
  },
  {
    path: 'call-log-history',
    component: CallLogsHistoryComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
