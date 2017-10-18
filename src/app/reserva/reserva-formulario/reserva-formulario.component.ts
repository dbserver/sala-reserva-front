import { ReservaService } from './../reserva.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { Reversa } from './../models/reversa';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserva-formulario',
  templateUrl: './reserva-formulario.component.html',
  styleUrls: ['./reserva-formulario.component.css']
})
export class ReservaFormularioComponent implements OnInit, OnDestroy {


  id: number;
  @Input() reserva: Reversa;
  inscricao: Subscription;
  formulario: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reservaService: ReservaService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.inicializarFormulario();
    this.carregarDados();
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  private inicializarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [null],
      sala: this.formBuilder.group({
        id: [null, [Validators.required]]
      }),
      periodo: this.formBuilder.group({
        dataInicio: [null, [Validators.required]],
        dataFim: [null, [Validators.required]]
      }),
      email: [null, [Validators.required, Validators.email]]
    });
  }

  private carregarDados() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.reserva = this.reservaService.getReserva(this.id);

      if (this.reserva == null) {
        this.router.navigate(['/naoEncontrado']);
      }
    });
  }

  onSubmit() {
    console.log(this.formulario.value);

    // http.post || http.put e no retorno reset formulario

    this.resetar();
  }

  resetar() {
    this.formulario.reset();
  }

  aplicaCssErro(campo: string) {
    let validAndTouched: boolean = this.verificaValidTouched(campo);

    return {
      'has-error': validAndTouched,
      'has-feedback': validAndTouched,
    }
  }

  verificaValidTouched(campo: any): boolean {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

}
