import { routing } from './shared/app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { ReversaListagemComponent } from './reserva/reversa-listagem/reversa-listagem.component';
import { ReservaFormularioComponent } from './reserva/reserva-formulario/reserva-formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    ReservaFormularioComponent,
    ReversaListagemComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
