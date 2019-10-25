import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialListasComponent } from './partial-listas.component';

describe('PartialListasComponent', () => {
  let component: PartialListasComponent;
  let fixture: ComponentFixture<PartialListasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialListasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
