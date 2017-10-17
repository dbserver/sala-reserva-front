import { ReservaService } from './../reserva.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reversa-listagem',
  templateUrl: './reversa-listagem.component.html',
  styleUrls: ['./reversa-listagem.component.css']
})
export class ReversaListagemComponent implements OnInit {

  private reservas: any[];

  constructor(private reservaService: ReservaService) {
    this.reservas = reservaService.getReservas();
  }

  ngOnInit() {
  }

}
