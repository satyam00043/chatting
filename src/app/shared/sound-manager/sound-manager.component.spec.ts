import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundManagerComponent } from './sound-manager.component';

describe('SoundManagerComponent', () => {
  let component: SoundManagerComponent;
  let fixture: ComponentFixture<SoundManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoundManagerComponent]
    });
    fixture = TestBed.createComponent(SoundManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
