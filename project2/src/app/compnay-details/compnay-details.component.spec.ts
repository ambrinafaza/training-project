import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompnayDetailsComponent } from './compnay-details.component';

describe('CompnayDetailsComponent', () => {
  let component: CompnayDetailsComponent;
  let fixture: ComponentFixture<CompnayDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompnayDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompnayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
