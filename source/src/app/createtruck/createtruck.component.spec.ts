import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetruckComponent } from './createtruck.component';

describe('CreatetruckComponent', () => {
  let component: CreatetruckComponent;
  let fixture: ComponentFixture<CreatetruckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetruckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
