
import { CommonModule } from '@angular/common';
import { GroupsComponent } from './groups.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { BannedMemberComponent } from './banned-member/banned-member.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { GroupMemberComponent } from './group-member/group-member.component';
import { JoinGroupComponent } from './join-group/join-group.component';
import { TransferOwnershipComponent } from './transfer-ownership/transfer-ownership.component';
import { CometChatAddMembers, CometChatBannedMembers, CometChatDetails, CometChatGroupMembers, CometChatTransferOwnership } from '@cometchat/chat-uikit-angular';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    GroupsComponent,
    AddMemberComponent,
    BannedMemberComponent,
    CreateGroupComponent,
    GroupMemberComponent,
    
    
    JoinGroupComponent,
    TransferOwnershipComponent
  ],
  imports: [
    CommonModule,BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    CometChatGroupMembers,
    CometChatAddMembers,
    CometChatTransferOwnership,
    CometChatBannedMembers,
    CometChatDetails
  ],
  providers: [],
  bootstrap: [GroupsComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class GroupsModule { }
