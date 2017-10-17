import { Reversa } from './models/reversa';
import { Periodo } from './models/periodo';
import { Sala } from './models/sala';
import { Injectable } from '@angular/core';

@Injectable()
export class ReservaService {

  private reservas: Reversa[] = [
    {id: 1, titulo: 'Reserva do Gabriel',sala: new Sala(), periodo: new Periodo(), email: "gabrielc@dbserver.com.br"},
    {id: 2, titulo: 'Reserva do Pedrão',sala: new Sala(), periodo: new Periodo(), email: "pedrao@dbserver.com.br" }
  ];

  getReservas(){
    return this.reservas;
  }

  getReserva(id:number){
    let reserva: Reversa = null;

    for(let i = 0; i < this.reservas.length; i++) {
      if(this.reservas[i].id == id) {
        reserva = this.reservas[i];
      }
    }

    return reserva;
  }

  constructor() { }

}
