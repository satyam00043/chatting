import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageReciptComponent } from './message-recipt.component';

describe('MessageReciptComponent', () => {
  let component: MessageReciptComponent;
  let fixture: ComponentFixture<MessageReciptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageReciptComponent]
    });
    fixture = TestBed.createComponent(MessageReciptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
