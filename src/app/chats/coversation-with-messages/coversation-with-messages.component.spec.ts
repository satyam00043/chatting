import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoversationWithMessagesComponent } from './coversation-with-messages.component';

describe('CoversationWithMessagesComponent', () => {
  let component: CoversationWithMessagesComponent;
  let fixture: ComponentFixture<CoversationWithMessagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoversationWithMessagesComponent]
    });
    fixture = TestBed.createComponent(CoversationWithMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
