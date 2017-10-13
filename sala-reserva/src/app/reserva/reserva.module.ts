import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ReversaListagemComponent } from './reversa-listagem/reversa-listagem.component';
import { ReservaFormularioComponent } from './reserva-formulario/reserva-formulario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ReversaListagemComponent, ReservaFormularioComponent],
  exports: [ReversaListagemComponent, ReservaFormularioComponent]
})
export class ReservaModule { }
