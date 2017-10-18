import { ReservaService } from './reserva.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ReversaListagemComponent } from './reversa-listagem/reversa-listagem.component';
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
    ReversaListagemComponent,
    ReservaFormularioComponent],
  exports: [
    ReversaListagemComponent,
    ReservaFormularioComponent
  ],
  providers: [
    ReservaService
  ]
})
export class ReservaModule { }
