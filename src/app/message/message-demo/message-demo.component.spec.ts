import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDemoComponent } from './message-demo.component';

describe('MessageDemoComponent', () => {
  let component: MessageDemoComponent;
  let fixture: ComponentFixture<MessageDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageDemoComponent]
    });
    fixture = TestBed.createComponent(MessageDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
