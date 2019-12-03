import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectDomotiqueComponent } from './object-domotique.component';

describe('ObjectDomotiqueComponent', () => {
  let component: ObjectDomotiqueComponent;
  let fixture: ComponentFixture<ObjectDomotiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectDomotiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectDomotiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
