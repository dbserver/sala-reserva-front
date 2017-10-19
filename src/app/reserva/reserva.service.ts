import { ServicoBase } from './../shared/models/servico-base';
import { Reserva } from './models/reserva';
import { Periodo } from './models/periodo';
import { Sala } from './models/sala';
import { Injectable } from '@angular/core';

@Injectable()
export class ReservaService extends ServicoBase {

  constructor() {
    super('reserva', [
      { id: 1, titulo: 'Reserva do Gabriel', sala: new Sala(1), periodo: new Periodo(new Date(), new Date()), email: "gabrielc@dbserver.com.br" },
      { id: 2, titulo: 'Reserva do Pedrão', sala: new Sala(2), periodo: new Periodo(new Date(), new Date()), email: "pedrao@dbserver.com.br" }
    ]);
  }

  salvar(reserva: Reserva) {
    this.arrayColecao.push(reserva);
  }

}
