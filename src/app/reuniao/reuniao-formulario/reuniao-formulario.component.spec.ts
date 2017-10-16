import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuniaoFormularioComponent } from './reuniao-formulario.component';

describe('ReuniaoFormularioComponent', () => {
  let component: ReuniaoFormularioComponent;
  let fixture: ComponentFixture<ReuniaoFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReuniaoFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReuniaoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
