import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOtpComponent } from './my-otp.component';

describe('MyOtpComponent', () => {
  let component: MyOtpComponent;
  let fixture: ComponentFixture<MyOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOtpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
