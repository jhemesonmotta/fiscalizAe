import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialEstatisticasRapidasComponent } from './partial-estatisticas-rapidas.component';

describe('PartialEstatisticasRapidasComponent', () => {
  let component: PartialEstatisticasRapidasComponent;
  let fixture: ComponentFixture<PartialEstatisticasRapidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialEstatisticasRapidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialEstatisticasRapidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
