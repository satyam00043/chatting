import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallLogsDemoComponent } from './call-logs-demo.component';

describe('CallLogsDemoComponent', () => {
  let component: CallLogsDemoComponent;
  let fixture: ComponentFixture<CallLogsDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallLogsDemoComponent]
    });
    fixture = TestBed.createComponent(CallLogsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
