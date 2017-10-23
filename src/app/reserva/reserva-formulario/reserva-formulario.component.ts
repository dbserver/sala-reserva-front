import { FormularioBase } from './../../shared/models/formulario-base';
import { ReservaService } from './../reserva.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { Reserva } from './../models/reserva';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserva-formulario',
  templateUrl: './reserva-formulario.component.html',
  styleUrls: ['./reserva-formulario.component.css']
})
export class ReservaFormularioComponent extends FormularioBase implements OnInit, OnDestroy {

  @Input() reserva: Reserva;

  constructor(
    private reservaService: ReservaService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
    super();
  }

  ngOnInit() {
    this.inicializarFormulario();
    this.carregarDados();
  }

  private inicializarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [null],
      titulo: [null, [Validators.required]],
      sala: this.formBuilder.group({
        id: [null, [Validators.required]]
      }),
      periodo: this.formBuilder.group({
        dataInicio: [null, [Validators.required]],
        dataFim: [null, [Validators.required]],
        horaInicio: [null, [Validators.required]],
        horaFim: [null, [Validators.required]],
      }),
      email: [null, [Validators.required, Validators.email]]
    });
  }

  private carregarDados() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.reserva = this.reservaService.obtemPorId(this.id);

      if (this.reserva == null) {
        this.router.navigate(['/naoEncontrado']);
      }

      this.formulario.patchValue(this.reserva);
    });
  }

  onSubmit() {
    console.log(this.formulario.value);

    this.reservaService.salvar(this.formulario.value);
  }
}
