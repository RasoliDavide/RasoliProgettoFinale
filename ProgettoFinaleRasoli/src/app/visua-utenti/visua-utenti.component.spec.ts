import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisuaUtentiComponent } from './visua-utenti.component';

describe('VisuaUtentiComponent', () => {
  let component: VisuaUtentiComponent;
  let fixture: ComponentFixture<VisuaUtentiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisuaUtentiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisuaUtentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
