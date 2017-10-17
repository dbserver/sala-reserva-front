import { ReservaService } from './../reserva.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { Reversa } from './../models/reversa';

@Component({
  selector: 'app-reserva-formulario',
  templateUrl: './reserva-formulario.component.html',
  styleUrls: ['./reserva-formulario.component.css']
})
export class ReservaFormularioComponent implements OnInit, OnDestroy {

  id:number;
  @Input() reserva:Reversa;
  inscricao:Subscription;

  constructor(private route:ActivatedRoute,
              private router:Router,
              private reservaService: ReservaService) {
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params:any) => {
      this.id = params['id'];
      this.reserva = this.reservaService.getReserva(this.id);

      if(this.reserva == null) {
        this.router.navigate(['/naoEncontrado']);
      }
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
