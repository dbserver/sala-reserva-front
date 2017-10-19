import { ReservaService } from './../reserva.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva-listagem',
  templateUrl: './reserva-listagem.component.html',
  styleUrls: ['./reserva-listagem.component.css']
})
export class ReservaListagemComponent implements OnInit {

  private reservas: any[];

  constructor(private reservaService: ReservaService) {
    this.reservas = reservaService.listaTodos();
  }

  ngOnInit() {
  }

}
