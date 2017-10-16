import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RegistroNaoEncontradoComponent } from './registro-nao-encontrado/registro-nao-encontrado.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MenuComponent, RegistroNaoEncontradoComponent],
  exports: [
    MenuComponent,RegistroNaoEncontradoComponent
  ]
})
export class SharedModule { }
