import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksLocalstorageComponent } from './links-localstorage.component';

describe('LinksLocalstorageComponent', () => {
  let component: LinksLocalstorageComponent;
  let fixture: ComponentFixture<LinksLocalstorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksLocalstorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksLocalstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
