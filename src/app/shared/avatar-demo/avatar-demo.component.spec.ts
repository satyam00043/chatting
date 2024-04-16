import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarDemoComponent } from './avatar-demo.component';

describe('AvatarDemoComponent', () => {
  let component: AvatarDemoComponent;
  let fixture: ComponentFixture<AvatarDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarDemoComponent]
    });
    fixture = TestBed.createComponent(AvatarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
