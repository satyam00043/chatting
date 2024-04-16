import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannedMemberComponent } from './banned-member.component';

describe('BannedMemberComponent', () => {
  let component: BannedMemberComponent;
  let fixture: ComponentFixture<BannedMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannedMemberComponent]
    });
    fixture = TestBed.createComponent(BannedMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
