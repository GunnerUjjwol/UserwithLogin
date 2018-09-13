import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnRegNavbarComponent } from './un-reg-navbar.component';

describe('UnRegNavbarComponent', () => {
  let component: UnRegNavbarComponent;
  let fixture: ComponentFixture<UnRegNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnRegNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnRegNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
