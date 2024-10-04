import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableGetComponent } from './observable-get.component';

describe('ObservableGetComponent', () => {
  let component: ObservableGetComponent;
  let fixture: ComponentFixture<ObservableGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
