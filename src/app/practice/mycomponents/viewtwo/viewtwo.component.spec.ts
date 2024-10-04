import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtwoComponent } from './viewtwo.component';

describe('ViewtwoComponent', () => {
  let component: ViewtwoComponent;
  let fixture: ComponentFixture<ViewtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
