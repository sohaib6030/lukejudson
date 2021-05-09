import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetrailerComponent } from './createtrailer.component';

describe('CreatetrailerComponent', () => {
  let component: CreatetrailerComponent;
  let fixture: ComponentFixture<CreatetrailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetrailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
