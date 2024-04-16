import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersWithMessageComponent } from './users-with-message.component';

describe('UsersWithMessageComponent', () => {
  let component: UsersWithMessageComponent;
  let fixture: ComponentFixture<UsersWithMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersWithMessageComponent]
    });
    fixture = TestBed.createComponent(UsersWithMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
