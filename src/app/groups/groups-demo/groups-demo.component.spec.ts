import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsDemoComponent } from './groups-demo.component';

describe('GroupsDemoComponent', () => {
  let component: GroupsDemoComponent;
  let fixture: ComponentFixture<GroupsDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupsDemoComponent]
    });
    fixture = TestBed.createComponent(GroupsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
