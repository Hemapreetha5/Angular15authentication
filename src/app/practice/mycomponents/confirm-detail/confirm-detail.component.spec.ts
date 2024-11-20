import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDetailComponent } from './confirm-detail.component';

describe('ConfirmDetailComponent', () => {
  let component: ConfirmDetailComponent;
  let fixture: ComponentFixture<ConfirmDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
