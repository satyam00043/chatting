import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallLogsDetailsComponent } from './call-logs-details.component';

describe('CallLogsDetailsComponent', () => {
  let component: CallLogsDetailsComponent;
  let fixture: ComponentFixture<CallLogsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallLogsDetailsComponent]
    });
    fixture = TestBed.createComponent(CallLogsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
