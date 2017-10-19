import { ReservaService } from './reserva.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ReservaListagemComponent } from './reserva-listagem/reserva-listagem.component';
import { ReservaFormularioComponent } from './reserva-formulario/reserva-formulario.component';
import { ReservaRoutingModule } from './reserva.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReservaRoutingModule
  ],
  declarations: [
    ReservaListagemComponent,
    ReservaFormularioComponent],
  exports: [
    ReservaListagemComponent,
    ReservaFormularioComponent
  ],
  providers: [
    ReservaService
  ]
})
export class ReservaModule { }
