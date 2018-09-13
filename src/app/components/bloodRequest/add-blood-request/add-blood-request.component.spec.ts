import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBloodRequestComponent } from './add-blood-request.component';

describe('AddBloodRequestComponent', () => {
  let component: AddBloodRequestComponent;
  let fixture: ComponentFixture<AddBloodRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBloodRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBloodRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
