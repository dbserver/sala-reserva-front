import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReniaoListagemComponent } from './reniao-listagem/reniao-listagem.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReniaoListagemComponent],
  exports: [ReniaoListagemComponent]
})
export class ReuniaoModule { }
