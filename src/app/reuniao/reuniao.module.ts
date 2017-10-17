import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReniaoListagemComponent } from './reniao-listagem/reniao-listagem.component';
import { ReuniaoFormularioComponent } from './reuniao-formulario/reuniao-formulario.component';
import { ReuniaoRoutingModule } from './reuniao.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReuniaoRoutingModule
  ],
  declarations: [ReniaoListagemComponent, ReuniaoFormularioComponent],
  exports: [ReniaoListagemComponent, ReuniaoFormularioComponent]
})
export class ReuniaoModule { }
