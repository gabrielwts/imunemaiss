import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScreenUsersComponent } from './main-screen-users.component';

describe('MainScreenUsersComponent', () => {
  let component: MainScreenUsersComponent;
  let fixture: ComponentFixture<MainScreenUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainScreenUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainScreenUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
