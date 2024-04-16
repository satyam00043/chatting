import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedularBubbleComponent } from './schedular-bubble.component';

describe('SchedularBubbleComponent', () => {
  let component: SchedularBubbleComponent;
  let fixture: ComponentFixture<SchedularBubbleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchedularBubbleComponent]
    });
    fixture = TestBed.createComponent(SchedularBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
