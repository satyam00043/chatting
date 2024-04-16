import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallLogsParticipantsComponent } from './call-logs-participants.component';

describe('CallLogsParticipantsComponent', () => {
  let component: CallLogsParticipantsComponent;
  let fixture: ComponentFixture<CallLogsParticipantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallLogsParticipantsComponent]
    });
    fixture = TestBed.createComponent(CallLogsParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
