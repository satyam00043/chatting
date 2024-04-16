import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallLogComponent } from './call-log.component';
import { CallLogsDetailsComponent } from './call-logs-details/call-logs-details.component';
import { CallLogsParticipantsComponent } from './call-logs-participants/call-logs-participants.component';
import { CallLogsHistoryComponent } from './call-logs-history/call-logs-history.component';
import { CallLogsRecordingComponent } from './call-logs-recording/call-logs-recording.component';
import { CallLogsDemoComponent } from './call-logs-demo/call-logs-demo.component';
import { CallLogsWithDetailsComponent } from './call-logs-with-details/call-logs-with-details.component';



@NgModule({
  declarations: [
    CallLogComponent,
    CallLogsDetailsComponent,
    CallLogsParticipantsComponent,
    CallLogsHistoryComponent,
    CallLogsRecordingComponent,
    CallLogsDemoComponent,
    CallLogsWithDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CallLogComponent ,
    CallLogsDemoComponent,
    CallLogsDetailsComponent,
    CallLogsHistoryComponent,
    CallLogsParticipantsComponent,
    CallLogsRecordingComponent,CallLogsWithDetailsComponent
    
    // Export the CallLogsComponent
  ]
})
export class CallLogModule { }
