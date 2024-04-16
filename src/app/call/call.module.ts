import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallComponent } from './call.component';
import { CallButtonsComponent } from './call-buttons/call-buttons.component';



@NgModule({
  declarations: [
    CallComponent,
    CallButtonsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CallModule { }
