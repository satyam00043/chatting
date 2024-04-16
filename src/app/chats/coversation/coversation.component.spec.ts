import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoversationComponent } from './coversation.component';

describe('CoversationComponent', () => {
  let component: CoversationComponent;
  let fixture: ComponentFixture<CoversationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoversationComponent]
    });
    fixture = TestBed.createComponent(CoversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
