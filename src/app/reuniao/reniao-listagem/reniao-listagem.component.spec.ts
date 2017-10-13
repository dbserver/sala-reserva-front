import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReniaoListagemComponent } from './reniao-listagem.component';

describe('ReniaoListagemComponent', () => {
  let component: ReniaoListagemComponent;
  let fixture: ComponentFixture<ReniaoListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReniaoListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReniaoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
