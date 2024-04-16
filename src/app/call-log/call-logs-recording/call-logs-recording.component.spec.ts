import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallLogsRecordingComponent } from './call-logs-recording.component';

describe('CallLogsRecordingComponent', () => {
  let component: CallLogsRecordingComponent;
  let fixture: ComponentFixture<CallLogsRecordingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallLogsRecordingComponent]
    });
    fixture = TestBed.createComponent(CallLogsRecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
