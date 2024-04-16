import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallLogsWithDetailsComponent } from './call-logs-with-details.component';

describe('CallLogsWithDetailsComponent', () => {
  let component: CallLogsWithDetailsComponent;
  let fixture: ComponentFixture<CallLogsWithDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallLogsWithDetailsComponent]
    });
    fixture = TestBed.createComponent(CallLogsWithDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
