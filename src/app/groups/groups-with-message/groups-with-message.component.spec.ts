import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsWithMessageComponent } from './groups-with-message.component';

describe('GroupsWithMessageComponent', () => {
  let component: GroupsWithMessageComponent;
  let fixture: ComponentFixture<GroupsWithMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupsWithMessageComponent]
    });
    fixture = TestBed.createComponent(GroupsWithMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
