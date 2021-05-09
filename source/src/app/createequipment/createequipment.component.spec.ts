import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateequipmentComponent } from './createequipment.component';

describe('CreateequipmentComponent', () => {
  let component: CreateequipmentComponent;
  let fixture: ComponentFixture<CreateequipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateequipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateequipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
