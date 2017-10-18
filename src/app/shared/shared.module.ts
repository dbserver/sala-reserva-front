import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu/menu.component';
import { RegistroNaoEncontradoComponent } from './registro-nao-encontrado/registro-nao-encontrado.component';
import { HomeComponent } from './home/home.component';
import { SharedRoutingModule } from './shared.routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedRoutingModule
  ],
  declarations: [
    MenuComponent,
    RegistroNaoEncontradoComponent,
    HomeComponent
  ],
  exports: [
    MenuComponent,
    RegistroNaoEncontradoComponent
  ]
})
export class SharedModule { }
