import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLoginScreenComponent } from './default-login-screen.component';

describe('DefaultLoginScreenComponent', () => {
  let component: DefaultLoginScreenComponent;
  let fixture: ComponentFixture<DefaultLoginScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultLoginScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultLoginScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
