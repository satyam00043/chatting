import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBubbleComponent } from './form-bubble.component';

describe('FormBubbleComponent', () => {
  let component: FormBubbleComponent;
  let fixture: ComponentFixture<FormBubbleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBubbleComponent]
    });
    fixture = TestBed.createComponent(FormBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
