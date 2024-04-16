import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBubbleComponent } from './text-bubble.component';

describe('TextBubbleComponent', () => {
  let component: TextBubbleComponent;
  let fixture: ComponentFixture<TextBubbleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextBubbleComponent]
    });
    fixture = TestBed.createComponent(TextBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
