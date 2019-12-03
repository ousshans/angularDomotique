import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaletteButtonComponent } from './palette-button.component';

describe('PaletteButtonComponent', () => {
  let component: PaletteButtonComponent;
  let fixture: ComponentFixture<PaletteButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaletteButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaletteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
