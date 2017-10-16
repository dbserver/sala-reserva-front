import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroNaoEncontradoComponent } from './registro-nao-encontrado.component';

describe('RegistroNaoEncontradoComponent', () => {
  let component: RegistroNaoEncontradoComponent;
  let fixture: ComponentFixture<RegistroNaoEncontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroNaoEncontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroNaoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
