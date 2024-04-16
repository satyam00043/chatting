import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBubbleComponent } from './card-bubble.component';

describe('CardBubbleComponent', () => {
  let component: CardBubbleComponent;
  let fixture: ComponentFixture<CardBubbleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardBubbleComponent]
    });
    fixture = TestBed.createComponent(CardBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
