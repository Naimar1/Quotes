import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Quote1DetailsComponent } from './quote1.details.component';

describe('Quote1.DetailsComponent', () => {
  let component: Quote1DetailsComponent;
  let fixture: ComponentFixture<Quote1DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Quote1DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Quote1DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
