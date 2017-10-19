import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReversaListagemComponent } from './reserva-listagem.component';

describe('ReservaListagemComponent', () => {
  let component: ReversaListagemComponent;
  let fixture: ComponentFixture<ReversaListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReversaListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReversaListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
