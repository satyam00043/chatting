import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallLogsHistoryComponent } from './call-logs-history.component';

describe('CallLogsHistoryComponent', () => {
  let component: CallLogsHistoryComponent;
  let fixture: ComponentFixture<CallLogsHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallLogsHistoryComponent]
    });
    fixture = TestBed.createComponent(CallLogsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
