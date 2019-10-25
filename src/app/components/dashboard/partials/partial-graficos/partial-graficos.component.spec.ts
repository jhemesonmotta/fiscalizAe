import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialGraficosComponent } from './partial-graficos.component';

describe('PartialGraficosComponent', () => {
  let component: PartialGraficosComponent;
  let fixture: ComponentFixture<PartialGraficosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialGraficosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialGraficosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
